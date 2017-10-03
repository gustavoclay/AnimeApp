import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  ionViewDidLoad() {
    
  }
 
}
