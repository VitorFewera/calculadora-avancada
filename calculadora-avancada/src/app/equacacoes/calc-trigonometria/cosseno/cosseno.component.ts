import { Component, OnInit } from '@angular/core';
import {CalculadoraTrigonometriaService} from "../../../shared/service/calculadora-trigonometria.service";

@Component({
  selector: 'app-cosseno',
  templateUrl: './cosseno.component.html',
  styleUrls: ['./cosseno.component.css']
})
export class CossenoComponent implements OnInit {

  constructor(public service: CalculadoraTrigonometriaService) { }

  ngOnInit(): void {
  }

  cateto: number;
  hipotenusa: number;

  calcular(cateto: number, hipotenusa: number){
    this.service.calcularCosseno(this.cateto, this.hipotenusa);
  }


  limpar(){
    this.cateto = null;
    this.hipotenusa = null;
    this.service.cosseno = null;
  }

}
