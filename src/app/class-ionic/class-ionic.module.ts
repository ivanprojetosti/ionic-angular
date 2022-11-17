import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassIonicPageRoutingModule } from './class-ionic-routing.module';

import { ClassIonicPage } from './class-ionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassIonicPageRoutingModule
  ],
  declarations: [ClassIonicPage]
})
export class ClassIonicPageModule {}
