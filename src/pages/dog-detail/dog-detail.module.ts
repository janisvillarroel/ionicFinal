import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DogDetailPage } from './dog-detail';

@NgModule({
  declarations: [
    DogDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DogDetailPage),
  ],
})
export class DogDetailPageModule {}
