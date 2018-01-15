import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DogsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DogsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DogsProvider Provider');
  }

  getDogs() {
    return new Promise(resolve => {
      this.http.get('https://dog.ceo/api/breeds/list/all').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
