import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  presentLoading(goToTabsPage) {
    let loader = this.loadingCtrl.create({
      content: "Estamos efetuando seu login via Facebook, aguarde...",
      duration: 3000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToTabsPage(){
    this.navCtrl.push(TabsPage);
  }
  goToCadastroPage(){
    this.navCtrl.push(CadastroPage);
  }
}
