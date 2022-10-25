import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArquiteturaAngularPage } from './arquitetura-angular.page';

const routes: Routes = [
  {
    path: '',
    component: ArquiteturaAngularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArquiteturaAngularPageRoutingModule {}
