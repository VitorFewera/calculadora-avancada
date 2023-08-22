import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TangenteComponent } from './tangente.component';

describe('TangenteComponent', () => {
  let component: TangenteComponent;
  let fixture: ComponentFixture<TangenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TangenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TangenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
