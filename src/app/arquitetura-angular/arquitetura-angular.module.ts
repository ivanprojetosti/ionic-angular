import { AlertComponent } from './components/alert/alert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArquiteturaAngularPageRoutingModule } from './arquitetura-angular-routing.module';

import { ArquiteturaAngularPage } from './arquitetura-angular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArquiteturaAngularPageRoutingModule
  ],
  declarations: [ArquiteturaAngularPage, AlertComponent]
})
export class ArquiteturaAngularPageModule { }
