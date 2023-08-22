import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraTrigonometriaService {

  constructor() {
  }

  seno: number;

  calcularSeno(cateto: number, hipotenusa: number) {
    this.seno = cateto / hipotenusa;
    return this.seno;
  }

  cosseno: number;

  calcularCosseno(cateto: number, hipotenusa: number) {
    this.cosseno = cateto / hipotenusa;
    return this.cosseno;
  }

  tangente: number;

  calcularTangente(cateto: number, hipotenusa: number) {
    this.tangente = cateto / hipotenusa;
    return this.tangente;
  }
}
