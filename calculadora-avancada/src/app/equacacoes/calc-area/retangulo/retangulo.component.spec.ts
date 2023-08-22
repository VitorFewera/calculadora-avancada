import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetanguloComponent } from './retangulo.component';

describe('RetanguloComponent', () => {
  let component: RetanguloComponent;
  let fixture: ComponentFixture<RetanguloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetanguloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetanguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
