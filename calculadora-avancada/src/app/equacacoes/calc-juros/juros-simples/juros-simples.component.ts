import { Component, OnInit } from '@angular/core';
import {CalculadoraJurosService} from "../../../shared/service/calculadora-juros.service";

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {

  constructor(public service: CalculadoraJurosService) { }

  ngOnInit(): void {
  }

  c: number;
  i: number;
  t: number;

  calcular(t,c,i){
    this.service.calcularJurosSimples(this.c,this.i,this.t);
  }

  limpar(){
    this.c = null;
    this.i = null;
    this.t = null;
    this.service.juros = null;
    this.service.montante = null;
  }
}
