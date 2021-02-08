import { Paddle } from './paddle';

describe('Paddle', () => {
  it('should create an instance', () => {
    let paddle = new Paddle(100, 10, 0, 0, 0, 0)
    expect(paddle).toBeTruthy();
  });

  it('should update correctly', () => {
    let paddle = new Paddle(100, 10, 0, 0, 10, -10)
    paddle.update()
    expect(paddle.x).toBe(10)
    expect(paddle.y).toBe(-10)
  })
});
