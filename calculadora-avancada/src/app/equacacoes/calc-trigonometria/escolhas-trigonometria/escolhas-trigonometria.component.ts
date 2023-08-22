import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-escolhas-trigonometria',
  templateUrl: './escolhas-trigonometria.component.html',
  styleUrls: ['./escolhas-trigonometria.component.css']
})
export class EscolhasTrigonometriaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  navegarSeno(){
    this.route.navigate(['/seno']);
  }

  navegarCosseno(){
    this.route.navigate(['/cosseno']);
  }

  navegarTangente(){
    this.route.navigate(['/tangente']);
  }

}
