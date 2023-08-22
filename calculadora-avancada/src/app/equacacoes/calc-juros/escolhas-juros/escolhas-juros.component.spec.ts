import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhasJurosComponent } from './escolhas-juros.component';

describe('EscolhasJurosComponent', () => {
  let component: EscolhasJurosComponent;
  let fixture: ComponentFixture<EscolhasJurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhasJurosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhasJurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
