import { PxPipe } from './px.pipe';

describe('PxPipe', () => {
  it('create an instance', () => {
    let pipe = new PxPipe();
    expect(pipe).toBeTruthy();
  });

  it(`appends 'px' to a number`, () => {
    let pipe = new PxPipe();
    expect(pipe.transform(10)).toBe('10px');
  });
});
