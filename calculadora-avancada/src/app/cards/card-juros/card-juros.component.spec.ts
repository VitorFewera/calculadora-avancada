import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJurosComponent } from './card-juros.component';

describe('CardJurosComponent', () => {
  let component: CardJurosComponent;
  let fixture: ComponentFixture<CardJurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardJurosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardJurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
