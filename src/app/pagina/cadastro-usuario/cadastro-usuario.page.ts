import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* parte que comanda os botoes */
  cadastrar() {
    console.log("cadastrando...")
  };
  corrigir() {
    console.log("corrigir...")
  };
  cancelar() {
    console.log("voltar para login...")
  };

}
