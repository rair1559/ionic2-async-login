import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Auth } from '../providers/auth';

import { LoadingController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = LoginPage;
  loader: any;

  constructor(platform: Platform, public auth: Auth, public loadingCtrl: LoadingController) {

    this.presentLoading();

    this.auth.login().then((loggedIn) => {

      if(loggedIn){
        this.rootPage = LoginPage;
      } else {
        this.rootPage = HomePage;
      }

      this.loader.dismiss();

    });


  }

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });

    this.loader.present();

  }

}
