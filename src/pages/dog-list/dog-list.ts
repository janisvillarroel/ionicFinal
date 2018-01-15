import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Dog } from '../../models/dog';
import { DogsProvider } from '../../providers/dogs/dogs';
import { isArray } from 'ionic-angular/util/util';
import { DogDetailPage } from '../dog-detail/dog-detail';
/**
 * Generated class for the DogListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dog-list',
  templateUrl: 'dog-list.html',
})
export class DogListPage {
  dogs: Dog[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public dogService: DogsProvider, 
              public alertCtrl: AlertController) {
     this.dogs=[];
     this.getDogs();
     }
  
    getDogs(){
        this.dogService.getDogs().then(data => {
          var list=data["message"];
          var item;
          for(item in list){
            console.log(item);
            this.dogs.push(new Dog(item));
          }
        });
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad DogListPage');
    }

    goToDetail(dog: Dog){
      this.navCtrl.push(DogDetailPage, {'dog': dog});
    }

}
