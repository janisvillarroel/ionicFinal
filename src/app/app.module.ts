import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { DogListPage } from '../pages/dog-list/dog-list';
import { DogsProvider } from '../providers/dogs/dogs';
import { DogItemComponent } from '../components/dog-item/dog-item';
import { DogDetailPage } from '../pages/dog-detail/dog-detail';
import { DogImageProvider } from '../providers/dog-image/dog-image';
export const configFirebase = {
  apiKey: "AIzaSyAhtRFkrV0k_zOcwcJbUyOGqHNs7kAmr7U",
  authDomain: "finalproject-a0e01.firebaseapp.com",
  databaseURL: "https://finalproject-a0e01.firebaseio.com",
  projectId: "finalproject-a0e01",
  storageBucket: "finalproject-a0e01.appspot.com",
  messagingSenderId: "445318475144"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    DogListPage,
    DogDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(configFirebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    DogListPage,
    DogDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DogsProvider,
    DogImageProvider
  ]
})
export class AppModule {}
