import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBaskaraComponent } from './card-baskara.component';

describe('CardBaskaraComponent', () => {
  let component: CardBaskaraComponent;
  let fixture: ComponentFixture<CardBaskaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBaskaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBaskaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
