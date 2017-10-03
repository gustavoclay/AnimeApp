import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { AnimePageModule } from '../pages/categoria/anime/anime.module';
import { DesenhoPageModule } from '../pages/categoria/desenho/desenho.module';
import { MangaPageModule } from '../pages/categoria/manga/manga.module';
import { HqPageModule } from '../pages/categoria/hq/hq.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ArtePageModule } from '../pages/arte/arte.module';
import { EventosPageModule } from '../pages/eventos/eventos.module';
import { IndicacaoPageModule } from '../pages/indicacao/indicacao.module';
import { Top10PageModule } from '../pages/top10/top10.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    AnimePageModule,
    DesenhoPageModule,
    MangaPageModule,
    HqPageModule,
    CadastroPageModule,
    LoginPageModule,
    ArtePageModule,
    EventosPageModule,
    IndicacaoPageModule,
    Top10PageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
