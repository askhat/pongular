import { Component, OnDestroy, OnInit } from '@angular/core';

import { KeyboardService } from './io/keyboard.service';
import { KeyCode } from './key.enum';
import { SolverService } from './math/solver.service';
import { Ball } from './state/ball';
import { Paddle } from './state/paddle';
import { Screen } from './state/screen';

const PAD_W = 75;
const PAD_H = 15;
const BAL_R = 10;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'pongular';

  private animId: number;
  private w = window.innerWidth;
  private h = window.innerHeight;

  public screen = new Screen(0, 0, this.w, this.h);
  public ball = new Ball(BAL_R, this.w >> 1, this.h >> 1, 0, 5);
  public padTop = new Paddle(PAD_W, PAD_H, (this.w - PAD_W) >> 1, 10);
  public padBtm = new Paddle(
    PAD_W,
    PAD_H,
    (this.w - PAD_W) / 2,
    this.h - PAD_H - 10
  );

  constructor(
    private solver: SolverService,
    private keyboard: KeyboardService
  ) {}

  ngOnInit() {
    this.update();
  }

  ngOnDestroy() {}

  private update() {
    if (
      this.keyboard.keysDown.has(KeyCode.ArrowLeft) ||
      this.keyboard.keysDown.has(KeyCode.a)
    ) {
      this.padBtm.vx = -10;
    } else if (
      this.keyboard.keysDown.has(KeyCode.ArrowRight) ||
      this.keyboard.keysDown.has(KeyCode.d)
    ) {
      this.padBtm.vx = 10;
    } else {
      this.padBtm.vx = 0;
    }

    if (this.solver.collide(this.padBtm, this.screen)) {
      this.padBtm.vx = 0;
    }

    if (this.solver.collide(this.ball.rect, this.screen)) {
      // this.ball.cx = this.w >> 1;
      // this.ball.cy = this.h >> 1;
      // this.ball.vy = 5;
    }
    if (this.solver.collide(this.ball.rect, this.padTop)) {
      this.ball.vy *= -1;
    }

    if (this.solver.collide(this.ball.rect, this.padBtm)) {
      this.ball.vy *= -1;
    }

    [this.ball, this.padTop, this.padBtm].forEach((obj) => obj.update());

    this.animId = requestAnimationFrame(this.update.bind(this));
  }
}
