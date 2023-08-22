import { TestBed } from '@angular/core/testing';

import { CalculadoraTrigonometriaService } from './calculadora-trigonometria.service';

describe('CalculadoraTrigonometriaService', () => {
  let service: CalculadoraTrigonometriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraTrigonometriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
