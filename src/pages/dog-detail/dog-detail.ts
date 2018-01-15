import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dog } from '../../models/dog';
import { DogImageProvider } from '../../providers/dog-image/dog-image';

/**
 * Generated class for the DogDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dog-detail',
  templateUrl: 'dog-detail.html',
})
export class DogDetailPage {

  @Input() dog: Dog;
  url: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dogService: DogImageProvider ) {
    this.dog = navParams.get('dog');
    this.getPictureDog();
  }

  getPictureDog(){
    this.dogService.getPicture(this.dog).then(data => {
      this.url=data["message"];
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DogDetailPage');
  }

}
