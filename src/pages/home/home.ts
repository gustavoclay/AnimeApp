import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MangaPage } from '../categoria/manga/manga';
import { AnimePage } from '../categoria/anime/anime';
import { DesenhoPage } from '../categoria/desenho/desenho';
import { HqPage } from '../categoria/hq/hq';
import { ArtePage } from '../arte/arte';
import { EventosPage } from '../eventos/eventos';
import { IndicacaoPage } from '../indicacao/indicacao';
import { Top10Page } from '../top10/top10';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  goToAnimesPage(){
    this.navCtrl.push(AnimePage);
  }
  goToMangasPage(){
    this.navCtrl.push(MangaPage)

  }
  goToDesenhosPage(){
    this.navCtrl.push(DesenhoPage);
  }
  goToHqPage(){
    this.navCtrl.push(HqPage);
  }
  goToArtePage(){
    this.navCtrl.push(ArtePage);
  }
  goToEventosPage(){
    this.navCtrl.push(EventosPage);
  }
  goToIndicacaoPage(){
    this.navCtrl.push(IndicacaoPage);
  }
  goToTop10Page(){
    this.navCtrl.push(Top10Page);
  }

}
