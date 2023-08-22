import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraFigPlanaService {

  constructor() {
  }


  aTriangulo: number;

  calcularAreaTriangulo(b: number, h: number) {
    this.aTriangulo = (b * h) / 2;
    return this.aTriangulo;
  }


  aQuadrado: number;

  calcularAreaQuadrado(l: number) {
    this.aQuadrado = l * l;
    return this.aQuadrado
  }

  aLosango: number;

  calcularAreaLosango(d:number, D:number){
    this.aLosango = (D*d)/2;
    return this.aLosango;
  }

  aTrapezio: number

  calcularAreaTrapezio(B:number, b: number, h:number){
    this.aTrapezio = ((B+b)*h)/2
    return this.aTrapezio;
  }

  aRetangulo: number;

  calcularAreaRetangulo(b: number, h:number){
    this.aRetangulo = b*h;
    return this.aRetangulo;
  }

  aCirculo: number;

  calcularAreaCirculo(r:number){
    this.aCirculo = (3.14*(r*r));
    return this.aCirculo;
  }
}
