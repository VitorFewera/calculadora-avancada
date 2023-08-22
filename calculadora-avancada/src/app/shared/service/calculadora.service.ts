import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() {
  }

  delta: number;
  x1: number;
  x2: number;

  calcularBaskara(a: number, b: number, c: number) {
    this.delta = (b * b) - 4 * a * c;
    this.x1 = (-b + Math.sqrt(this.delta)) / (2 * a);
    this.x2 = (-b - Math.sqrt(this.delta)) / (2 * a);
    console.log(this.delta, this.x1, this.x2);
    return this.delta, this.x1, this.x2;
  }
}
