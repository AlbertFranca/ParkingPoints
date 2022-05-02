import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Login', url: '/login-usuario', icon: 'log-in' },
    { title: 'Cadastro Usuario', url: '/cadastro-usuario', icon: 'newspaper' },
    { title: 'Cadastro Nota Fiscal', url: '/cadastro-nota-fiscal', icon: 'business' },
    { title: 'Extrato de Pontos', url: '/extrato-pontos', icon: 'apps' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
