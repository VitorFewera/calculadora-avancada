import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhasTrigonometriaComponent } from './escolhas-trigonometria.component';

describe('EscolhasTrigonometriaComponent', () => {
  let component: EscolhasTrigonometriaComponent;
  let fixture: ComponentFixture<EscolhasTrigonometriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhasTrigonometriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhasTrigonometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
