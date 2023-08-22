import { Component, OnInit } from '@angular/core';
import {CalculadoraFigPlanaService} from "../../../shared/service/calculadora-fig-plana.service";

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.css']
})
export class CirculoComponent implements OnInit {

  constructor(public service: CalculadoraFigPlanaService) { }

  ngOnInit(): void {
  }

  r: number;

  calcular(r){
    this.service.calcularAreaCirculo(this.r);
  }

  limpar(){
    this.r = null;
    this.service.aCirculo = null;
  }
}
