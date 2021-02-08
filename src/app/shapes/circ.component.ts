import { Component, Input } from '@angular/core';

import { Color } from '../color.enum';
import { PxPipe } from '../px.pipe';
import { Circ } from './circ';

@Component({
  selector: 'pong-circ',
  templateUrl: './circ.component.html',
  styleUrls: ['./circ.component.css'],
  providers: [PxPipe],
})
export class CircComponent implements Circ {
  @Input() color: Color;
  @Input() r: number;
  @Input() cx: number;
  @Input() cy: number;
}
