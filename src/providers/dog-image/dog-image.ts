import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from '../../models/dog';

/*
  Generated class for the DogImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DogImageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DogImageProvider Provider');
  }
  getPicture(dog: Dog) {
    return new Promise(resolve => {
      this.http.get('https://dog.ceo/api/breed/'+dog.breed+'/images/random').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
