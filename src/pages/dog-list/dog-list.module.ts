import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DogListPage } from './dog-list';
import { DogItemComponent } from '../../components/dog-item/dog-item';


@NgModule({
  declarations: [
    DogListPage,
    DogItemComponent
  ],
  imports: [
    IonicPageModule.forChild(DogListPage),
  ],
})
export class DogListPageModule {}
