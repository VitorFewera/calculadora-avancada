import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcBhaskaraComponent } from './calc-bhaskara.component';

describe('CalcBhaskaraComponent', () => {
  let component: CalcBhaskaraComponent;
  let fixture: ComponentFixture<CalcBhaskaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcBhaskaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcBhaskaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
