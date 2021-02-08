export class Segment {
  0: number;
  1: number;

  constructor(...[a, b]: [number, number]) {
    this[0] = a;
    this[1] = b;
  }

  contain(p: number) {
    return this[0] <= p && p <= this[1];
  }
}
