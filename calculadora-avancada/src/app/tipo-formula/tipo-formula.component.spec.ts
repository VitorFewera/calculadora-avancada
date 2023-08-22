import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoFormulaComponent } from './tipo-formula.component';

describe('TipoFormulaComponent', () => {
  let component: TipoFormulaComponent;
  let fixture: ComponentFixture<TipoFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoFormulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
