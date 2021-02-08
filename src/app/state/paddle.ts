import { Color } from '../color.enum';
import { Rect } from '../shapes/rect';

export class Paddle implements Rect {
  constructor(
    public w: number,
    public h: number,
    public x: number,
    public y: number,
    public vx = 0,
    public vy = 0,
    public color = Color.BLUE
  ) {}

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}
