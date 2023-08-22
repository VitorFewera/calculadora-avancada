import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-escolhas',
  templateUrl: './escolhas.component.html',
  styleUrls: ['./escolhas.component.css']
})
export class EscolhasComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

   navegarTriangulo(){
    this.route.navigate(['/triangulo']);
  }

  navegarQuadrado(){
    this.route.navigate(['/quadrado']);
  }

  navegarTrapezio(){
    this.route.navigate(['/trapezio']);
  }

  navegarRetangulo(){
    this.route.navigate(['/retangulo']);
  }

  navegarLosango(){
    this.route.navigate(['/losango']);
  }

  navegarCirculo(){
    this.route.navigate(['/circulo']);
  }

}
