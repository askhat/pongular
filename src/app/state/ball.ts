import { Color } from '../color.enum';
import { Circ } from '../shapes/circ';
import { Rect } from '../shapes/rect';

export class Ball implements Circ {
  constructor(
    public r: number,
    public cx: number,
    public cy: number,
    public vx = 0,
    public vy = 0,
    public color = Color.GREEN
  ) {}

  update() {
    this.cx += this.vx;
    this.cy += this.vy;
  }

  toRect(): Rect {
    let w = this.r * 2;
    let h = this.r * 2;
    let x = this.cx - this.r;
    let y = this.cy - this.r;
    return { w, h, x, y };
  }
}
