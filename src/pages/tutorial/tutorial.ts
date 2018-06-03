import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

export interface Slide {
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.dir = platform.dir();
    this.slides = [
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae molestiae est omnis facilis.",
        image: 'assets/imgs/slide-01.png',
      },
      {
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae molestiae est omnis facilis",
        image: 'assets/imgs/slide-02.png',
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
