import { Component, OnInit } from '@angular/core';
import {CalculadoraTrigonometriaService} from "../../../shared/service/calculadora-trigonometria.service";

@Component({
  selector: 'app-seno',
  templateUrl: './seno.component.html',
  styleUrls: ['./seno.component.css']
})
export class SenoComponent implements OnInit {

  constructor(public service: CalculadoraTrigonometriaService) { }

  ngOnInit(): void {
  }


  cateto : number;
  hipotenusa : number;

  calcular(cateto,hipotenusa){
    this.service.calcularSeno(cateto, hipotenusa);
  }

  limpar(){
    this.cateto = null;
    this.hipotenusa = null
    this.service.seno = null;
  }
}
