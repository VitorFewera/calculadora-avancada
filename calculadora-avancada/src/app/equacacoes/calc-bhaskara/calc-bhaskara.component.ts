import {Component, OnInit} from '@angular/core';
import {CalculadoraService} from "src/app/shared/service/calculadora.service";

@Component({
  selector: 'app-calc-bhaskara',
  templateUrl: './calc-bhaskara.component.html',
  styleUrls: ['./calc-bhaskara.component.css']
})
export class CalcBhaskaraComponent implements OnInit {

  constructor(public service: CalculadoraService) {
  }

  ngOnInit(): void {

  }

  a: number ;
  b: number ;
  c: number ;

   calcular(a: number, b: number, c: number) {
        this.service.calcularBaskara(a = this.a, b= this.b, c = this.c);
    console.log(a,b,c);
  }

  limpar(){
     this.a = null;
     this.b = null;
     this.c = null;
     this.service.delta = null;
     this.service.x1 = null;
     this.service.x2 = null;
  }


}
