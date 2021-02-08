import { Component, Input } from '@angular/core';
import { PxPipe } from '../px.pipe';

import { Rect } from './rect';

@Component({
  selector: 'pong-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css'],
  providers: [PxPipe],
})
export class RectComponent implements Rect {
  @Input() color: string;
  @Input() x: number;
  @Input() y: number;
  @Input() w: number;
  @Input() h: number;
}
