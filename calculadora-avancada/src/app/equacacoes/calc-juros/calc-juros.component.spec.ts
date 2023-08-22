import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcJurosComponent } from './calc-juros.component';

describe('CalcJurosComponent', () => {
  let component: CalcJurosComponent;
  let fixture: ComponentFixture<CalcJurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcJurosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcJurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
