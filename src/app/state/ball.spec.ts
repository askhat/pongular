import { Ball } from './ball';
import { Color } from '../color.enum';

describe('Ball', () => {
  it('should create an instance', () => {
    let ball = new Ball(10, 0, 0, 0, 0, Color.BLACK);
    expect(ball).toBeTruthy();
  });

  it('should update correctly', () => {
    let ball = new Ball(10, 0, 0, 10, 0);
    expect(ball.cx).toBe(0);
    ball.update();
    expect(ball.cx).toBe(20);
  });

  it('should expose outer rect', () => {
    let ball = new Ball(10, 0, 0);
    let rect = ball.toRect();
    expect(rect.x).toBe(-10);
    expect(rect.y).toBe(-10);
    expect(rect.w).toBe(20);
    expect(rect.h).toBe(20);
  });
});
