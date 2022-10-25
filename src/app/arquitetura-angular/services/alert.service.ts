import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alert() {
    alert("Esse Alerta foi gerado pelo Service");
  }


}
