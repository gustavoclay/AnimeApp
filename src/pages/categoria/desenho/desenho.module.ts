import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesenhoPage } from './desenho';

@NgModule({
  declarations: [
    DesenhoPage,
  ],
  imports: [
    IonicPageModule.forChild(DesenhoPage),
  ],
})
export class DesenhoPageModule {}
