import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapezioComponent } from './trapezio.component';

describe('TrapezioComponent', () => {
  let component: TrapezioComponent;
  let fixture: ComponentFixture<TrapezioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrapezioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrapezioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
