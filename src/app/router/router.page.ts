import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.page.html',
  styleUrls: ['./router.page.scss'],
})
export class RouterPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  acessarNgIf() {
    this.router.navigate(['/ngif']);
  }
  acessarNgFor() {
    this.router.navigate(['/ngfor']);

  }


}
