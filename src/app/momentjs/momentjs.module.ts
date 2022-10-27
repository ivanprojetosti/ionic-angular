import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentjsPageRoutingModule } from './momentjs-routing.module';

import { MomentjsPage } from './momentjs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentjsPageRoutingModule
  ],
  declarations: [MomentjsPage]
})
export class MomentjsPageModule {}
