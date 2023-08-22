import { Component, OnInit } from '@angular/core';
import {CalculadoraFigPlanaService} from "../../../shared/service/calculadora-fig-plana.service";

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.css']
})
export class TrianguloComponent implements OnInit {

  constructor(public service: CalculadoraFigPlanaService) { }

  ngOnInit(): void {
  }

  b : number;
  h : number;

  calcular(b,h){
    this.service.calcularAreaTriangulo(b,h);
  }

  limpar(){
    this.b = null;
    this.h = null
    this.service.aTriangulo = null;
  }
}
