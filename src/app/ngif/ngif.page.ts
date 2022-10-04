import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.page.html',
  styleUrls: ['./ngif.page.scss'],
})
export class NgifPage implements OnInit {


  //Mostrar relários de green, red ou cashout.
  mostrar_relatorio_green = false;
  mostrar_relatorio_red = false;
  mostrar_relatorio_cashout = false;


  total_apostas_green = 25;
  total_apostas_red = 5;
  total_apostas_cashout = 9;



  constructor() { }

  ngOnInit() {
  }


  mostrarApostasGreen() {
    this.mostrar_relatorio_green = true;
  }

  mostrarApostasRed() {
    this.mostrar_relatorio_red = true;
  }

  mostrarApostasCashout() {
    this.mostrar_relatorio_cashout = true;
  }
  limparRelatorio() {
    this.mostrar_relatorio_green = false;
    this.mostrar_relatorio_red = false;
    this.mostrar_relatorio_cashout = false;

  }

}
