import { Component, OnInit } from '@angular/core';
import {CalculadoraFigPlanaService} from "../../../shared/service/calculadora-fig-plana.service";

@Component({
  selector: 'app-retangulo',
  templateUrl: './retangulo.component.html',
  styleUrls: ['./retangulo.component.css']
})
export class RetanguloComponent implements OnInit {

  constructor(public service: CalculadoraFigPlanaService) { }

  ngOnInit(): void {
  }

  b: number;

  h: number;

  calcular(b,h){
    this.service.calcularAreaRetangulo(this.b,this.h);
  }

  limpar(){
    this.b = null;
    this.h = null;
    this.service.aRetangulo = null;
  }
}
