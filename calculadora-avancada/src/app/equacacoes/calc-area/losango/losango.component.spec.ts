import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosangoComponent } from './losango.component';

describe('LosangoComponent', () => {
  let component: LosangoComponent;
  let fixture: ComponentFixture<LosangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LosangoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LosangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
