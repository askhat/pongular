import { Injectable, OnDestroy } from '@angular/core';
import { KeyCode } from '../key.enum';

@Injectable({ providedIn: 'root' })
export class KeyboardService implements OnDestroy {
  public keysDown: Set<KeyCode> = new Set();

  constructor() {
    window.addEventListener('keydown', this.handleKeydown.bind(this));
    window.addEventListener('keyup', this.handleKeyup.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('keyup', this.handleKeyup);
  }

  private handleKeydown({ code }: KeyboardEvent) {
    this.keysDown.add(code as KeyCode);
  }

  private handleKeyup({ code }: KeyboardEvent) {
    this.keysDown.delete(code as KeyCode);
  }
}
