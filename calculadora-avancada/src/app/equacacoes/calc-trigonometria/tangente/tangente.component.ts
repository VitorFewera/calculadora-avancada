import { Component, OnInit } from '@angular/core';
import {CalculadoraTrigonometriaService} from "../../../shared/service/calculadora-trigonometria.service";

@Component({
  selector: 'app-tangente',
  templateUrl: './tangente.component.html',
  styleUrls: ['./tangente.component.css']
})
export class TangenteComponent implements OnInit {

  constructor(public service: CalculadoraTrigonometriaService) { }

  ngOnInit(): void {
  }

  catetoOposto: number;
  catetoAdjacente: number;

  calcular(catetoOposto: number, catetoAdjacente: number){
    this.service.calcularTangente(this.catetoOposto,this.catetoAdjacente)
  }

  limpar(){
    this.catetoAdjacente = null;
    this.catetoOposto = null,
      this.service.tangente = null;
  }
}
