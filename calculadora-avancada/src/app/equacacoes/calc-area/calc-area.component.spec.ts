import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcAreaComponent } from './calc-area.component';

describe('CalcAreaComponent', () => {
  let component: CalcAreaComponent;
  let fixture: ComponentFixture<CalcAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
