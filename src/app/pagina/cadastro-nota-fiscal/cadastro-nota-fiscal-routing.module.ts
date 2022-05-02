import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroNotaFiscalPage } from './cadastro-nota-fiscal.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroNotaFiscalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroNotaFiscalPageRoutingModule {}
