import { TestBed } from '@angular/core/testing';

import { CalculadoraFigPlanaService } from './calculadora-fig-plana.service';

describe('CalculadoraFigPlanaService', () => {
  let service: CalculadoraFigPlanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraFigPlanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
