import { Injectable } from '@angular/core';
import { bindCallback } from 'rxjs';

import { Rect } from '../shapes/rect';
import { Segment } from './segment';

@Injectable({ providedIn: 'root' })
export class SolverService {
  collide(A: Rect, B: Rect): boolean {
    let Ax1 = A.x;
    let Ax2 = A.x + A.w;
    let Bx1 = B.x;
    let Bx2 = B.x + B.w;
    let Ay1 = A.y;
    let Ay2 = A.y + A.h;
    let By1 = B.y;
    let By2 = B.y + B.h;
    let Ah = new Segment(Ax1, Ax2);
    let Bh = new Segment(Bx1, Bx2);
    let Av = new Segment(Ay1, Ay2);
    let Bv = new Segment(By1, By2);
    let hIntersection =
      Ah.contain(Bx1) || Ah.contain(Bx2) || Bh.contain(Ax1) || Bh.contain(Ax2);
    let vIntersection =
      Av.contain(By1) || Av.contain(By2) || Bv.contain(Ay1) || Bv.contain(Ay2);
    return hIntersection && vIntersection;
  }
}
