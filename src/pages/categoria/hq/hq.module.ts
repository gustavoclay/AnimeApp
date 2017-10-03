import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HqPage } from './hq';

@NgModule({
  declarations: [
    HqPage,
  ],
  imports: [
    IonicPageModule.forChild(HqPage),
  ],
})
export class HqPageModule {}
