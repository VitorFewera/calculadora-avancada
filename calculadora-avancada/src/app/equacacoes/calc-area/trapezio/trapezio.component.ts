import { Component, OnInit } from '@angular/core';
import {CalculadoraFigPlanaService} from "../../../shared/service/calculadora-fig-plana.service";

@Component({
  selector: 'app-trapezio',
  templateUrl: './trapezio.component.html',
  styleUrls: ['./trapezio.component.css']
})
export class TrapezioComponent implements OnInit {

  constructor(public service: CalculadoraFigPlanaService) { }

  ngOnInit(): void {
  }

  B: number;
  b: number
  h:number;

  calcular(B,b,h){
    this.service.calcularAreaTrapezio(B,b,h);
  }

  limpar(){
    this.B = null;
    this.b = null;
    this.h = null;
    this.service.aTrapezio = null;
  }
}
/*
import {Negociacao} from "./models/negociacao.js";

import(Negociacao)
// só um teste

class Negociacao{
    constructor (public negociacao: Negociacao) {
    }
}

// parace que sem querer eu coloquei um arquivo dentro do outro, ou nao ?
// hahahaha conseguiu, agora nem você sabe como fez isso hahaha




 */
