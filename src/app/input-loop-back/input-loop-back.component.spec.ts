import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLoopBackComponent } from './input-loop-back.component';

describe('InputLoopBackComponent', () => {
  let component: InputLoopBackComponent;
  let fixture: ComponentFixture<InputLoopBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLoopBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLoopBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
