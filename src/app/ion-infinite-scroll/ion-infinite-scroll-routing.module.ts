import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonInfiniteScrollPage } from './ion-infinite-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: IonInfiniteScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonInfiniteScrollPageRoutingModule {}
