import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndicacaoPage } from './indicacao';

@NgModule({
  declarations: [
    IndicacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(IndicacaoPage),
  ],
})
export class IndicacaoPageModule {}
