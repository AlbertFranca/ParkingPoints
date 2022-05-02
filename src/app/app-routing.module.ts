import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./pagina/cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'cadastro-nota-fiscal',
    loadChildren: () => import('./pagina/cadastro-nota-fiscal/cadastro-nota-fiscal.module').then( m => m.CadastroNotaFiscalPageModule)
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./pagina/login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  },
  {
    path: 'extrato-pontos',
    loadChildren: () => import('./pagina/extrato-pontos/extrato-pontos.module').then( m => m.ExtratoPontosPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
