import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-escolhas-juros',
  templateUrl: './escolhas-juros.component.html',
  styleUrls: ['./escolhas-juros.component.css']
})
export class EscolhasJurosComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navegarSimples(){
    this.route.navigate(['/juros-simples']);
  }

  navegarComposto(){
    this.route.navigate(['/juros-composto']);
  }
}
