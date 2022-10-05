import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.page.html',
  styleUrls: ['./ngfor.page.scss'],
})
export class NgforPage implements OnInit {

  arrLinguagens = [
    "Python", "C#",
    "C++", "JavaScript", "PHP", "Swift", "Java", "Go", "SQL", "Ruby"
  ];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.arrLinguagens.length; i++) {
      let linguagem = this.arrLinguagens[i];
    }


  }

}
