import { AlertService } from './services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arquitetura-angular',
  templateUrl: './arquitetura-angular.page.html',
  styleUrls: ['./arquitetura-angular.page.scss'],
})
export class ArquiteturaAngularPage implements OnInit {

  constructor(public alertservice: AlertService) { }

  ngOnInit() {
  }

  mostrarAlertService() {
    this.alertservice.alert();
  }

  mostrarAlertTS() {
    alert("Esse Alerta foi gerado pelo arquvivo TS");
  }



}
