import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-ionic',
  templateUrl: './class-ionic.page.html',
  styleUrls: ['./class-ionic.page.scss'],
})
export class ClassIonicPage implements OnInit {

  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  constructor() { }

  ngOnInit() {
  }

}
