import { Segment } from './segment';

describe('Segment', () => {
  it('should create an instance', () => {
    expect(new Segment(0, 1)).toBeTruthy();
  });

  it('should compute segment containment', () => {
    let segment = new Segment(1, 10);
    expect(segment.contain(5)).toBeTrue();
    expect(segment.contain(15)).toBeFalse();
  });
});
