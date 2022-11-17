import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassIonicPage } from './class-ionic.page';

const routes: Routes = [
  {
    path: '',
    component: ClassIonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassIonicPageRoutingModule {}
