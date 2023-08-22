import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CossenoComponent } from './cosseno.component';

describe('CossenoComponent', () => {
  let component: CossenoComponent;
  let fixture: ComponentFixture<CossenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CossenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CossenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
