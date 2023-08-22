import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrigonometricaComponent } from './card-trigonometrica.component';

describe('CardTrigonometricaComponent', () => {
  let component: CardTrigonometricaComponent;
  let fixture: ComponentFixture<CardTrigonometricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTrigonometricaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTrigonometricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
