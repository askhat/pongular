import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircComponent } from './circ.component';

describe('CircComponent', () => {
  let component: CircComponent;
  let fixture: ComponentFixture<CircComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
