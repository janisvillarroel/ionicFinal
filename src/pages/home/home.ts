import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { DogListPage } from '../dog-list/dog-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user: User = new User();
  
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public afAuth: AngularFireAuth, public toastCtrl: ToastController) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }
  
    login(){
      console.log(this.user);
      this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(result => {
        this.navCtrl.push(DogListPage);
      }).catch(err => {
        let toast = this.toastCtrl.create({
          message: err.message,
          duration: 3000
        });
        toast.present();
        console.error(err);
      });
  
    }
    register(){
      this.navCtrl.push(RegisterPage);
    }
}
