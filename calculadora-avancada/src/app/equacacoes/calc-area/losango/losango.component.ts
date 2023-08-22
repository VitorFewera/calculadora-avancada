import { Component, OnInit } from '@angular/core';
import {CalculadoraFigPlanaService} from "../../../shared/service/calculadora-fig-plana.service";

@Component({
  selector: 'app-losango',
  templateUrl: './losango.component.html',
  styleUrls: ['./losango.component.css']
})
export class LosangoComponent implements OnInit {

  constructor(public service: CalculadoraFigPlanaService) { }

  ngOnInit(): void {
  }

  d: number;
  D: number;

  calcular(d,D){
    this.service.calcularAreaLosango(this.d,this.D);
  }

  limpar(){
    this.d = null;
    this.D = null;
    this.service.aLosango = null;
  }

}
