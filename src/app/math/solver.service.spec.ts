import { TestBed } from '@angular/core/testing';
import { Ball } from '../state/ball';
import { Paddle } from '../state/paddle';

import { SolverService } from './solver.service';

describe('SolverService', () => {
  let service: SolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should compute collisions correctly', () => {
    let paddle = new Paddle(10, 30, 20, -15);
    let ball = new Ball(10, 10, 10, 10);
    // expect(service.collide(paddle, ball.toRect())).toBeFalse();
    console.log({ paddle, ball });
    ball.update();
    console.log({ paddle, ball });
    // expect(service.collide(paddle, ball.rect)).toBeTrue();
  });
});
