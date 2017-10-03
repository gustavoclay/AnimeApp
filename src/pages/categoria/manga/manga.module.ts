import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MangaPage } from './manga';

@NgModule({
  declarations: [
    MangaPage,
  ],
  imports: [
    IonicPageModule.forChild(MangaPage),
  ],
})
export class MangaPageModule {}
