import { Segment } from './segment';

export class Point extends Segment {
  constructor(val: number) {
    super(val, val);
  }
}
