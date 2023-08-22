import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcTrigonometriaComponent } from './calc-trigonometria.component';

describe('CalcTrigonometriaComponent', () => {
  let component: CalcTrigonometriaComponent;
  let fixture: ComponentFixture<CalcTrigonometriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcTrigonometriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcTrigonometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
