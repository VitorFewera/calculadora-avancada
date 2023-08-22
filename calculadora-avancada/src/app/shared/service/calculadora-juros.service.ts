import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraJurosService {

  constructor() { }

  juros: number;
  montante: number;

  calcularJurosSimples(c,i,t){
    this.juros = c*i*t;
    this.montante = this.juros + c;

    return this.juros,this.montante
  }

  calcularJurosComposto(c,i,t){
    this.juros = c * Math.pow((1 + i),t);
    this.montante = this.juros + c;
  }
}
