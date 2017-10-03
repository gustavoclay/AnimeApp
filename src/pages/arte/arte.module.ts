import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtePage } from './arte';

@NgModule({
  declarations: [
    ArtePage,
  ],
  imports: [
    IonicPageModule.forChild(ArtePage),
  ],
})
export class ArtePageModule {}
