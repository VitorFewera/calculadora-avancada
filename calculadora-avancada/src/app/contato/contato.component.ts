import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email: string;
  texto: string;

  limpar(){
    this.email = '';
    this.texto = '';
  }

  submit(){
    if(this.email === '' && this.texto === '') {
      confirm('Informe os dados do e-mail!');
    }
    else{
      confirm("Email enviado com Sucesso!");
    }
    this.limpar();
  }

}
