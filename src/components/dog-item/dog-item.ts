import { Component, Input } from '@angular/core';
import { Dog } from '../../models/dog';

/**
 * Generated class for the DogItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dog-item',
  templateUrl: 'dog-item.html'
})
export class DogItemComponent {

  @Input() listDogs: Dog[];

  constructor() {
    console.log('Hello DogItemComponent Component');
  }

}
