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
  /* Comando dos Botões */
  cadastrar() {
    console.log('cadastrando...');
  };
  editar() {
    console.log('editar...');
  };
  cancelar() {
    console.log('voltar para login...');
  };

}
