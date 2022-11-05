import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonInfiniteScrollPageRoutingModule } from './ion-infinite-scroll-routing.module';

import { IonInfiniteScrollPage } from './ion-infinite-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonInfiniteScrollPageRoutingModule
  ],
  declarations: [IonInfiniteScrollPage]
})
export class IonInfiniteScrollPageModule {}
