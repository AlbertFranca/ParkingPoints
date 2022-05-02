import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroNotaFiscalPageRoutingModule } from './cadastro-nota-fiscal-routing.module';

import { CadastroNotaFiscalPage } from './cadastro-nota-fiscal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroNotaFiscalPageRoutingModule
  ],
  declarations: [CadastroNotaFiscalPage]
})
export class CadastroNotaFiscalPageModule {}
