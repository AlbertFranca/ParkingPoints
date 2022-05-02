import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtratoPontosPageRoutingModule } from './extrato-pontos-routing.module';

import { ExtratoPontosPage } from './extrato-pontos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtratoPontosPageRoutingModule
  ],
  declarations: [ExtratoPontosPage]
})
export class ExtratoPontosPageModule {}
