import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtratoPontosPage } from './extrato-pontos.page';

const routes: Routes = [
  {
    path: '',
    component: ExtratoPontosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtratoPontosPageRoutingModule {}
