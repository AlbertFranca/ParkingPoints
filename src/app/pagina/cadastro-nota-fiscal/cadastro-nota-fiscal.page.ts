import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-nota-fiscal',
  templateUrl: './cadastro-nota-fiscal.page.html',
  styleUrls: ['./cadastro-nota-fiscal.page.scss'],
})
export class CadastroNotaFiscalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* parte que comanda os botoes */
  enviar() {
    console.log('enviando...');
  };
  qrCode() {
    console.log('enviando qrCode...');
  };
}
