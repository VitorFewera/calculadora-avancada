import { TestBed } from '@angular/core/testing';

import { CalculadoraJurosService } from './calculadora-juros.service';

describe('CalculadoraJurosService', () => {
  let service: CalculadoraJurosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraJurosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
