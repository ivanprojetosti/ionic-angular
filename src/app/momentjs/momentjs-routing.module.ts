import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentjsPage } from './momentjs.page';

const routes: Routes = [
  {
    path: '',
    component: MomentjsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentjsPageRoutingModule {}
