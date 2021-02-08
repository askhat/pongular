import { Color } from '../color.enum';
import { Rect } from '../shapes/rect';

export class Screen implements Rect {
  constructor(
    public x: number,
    public y: number,
    public w: number,
    public h: number,
    public color = Color.BLACK
  ) {}
}
