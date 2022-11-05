import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-infinite-scroll',
  templateUrl: './ion-infinite-scroll.page.html',
  styleUrls: ['./ion-infinite-scroll.page.scss'],
})
export class IonInfiniteScrollPage implements OnInit {

  items: any = [];
  itemsPage: any = [];
  private readonly offset: number = 12;
  private index: number = 0;

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${i + 1}`);

    }
    this.itemsPage = this.items.slice(this.index, this.offset + this.index);
    this.index += this.offset;
  }
  carregarDados(event) {
    setTimeout(() => {
      let news = this.items.slice(this.index, this.offset + this.index);
      this.index += this.offset;

      for (let i = 0; i < news.length; i++) {
        this.itemsPage.push(news[i]);
      }

      event.target.complete();

      if (this.itemsPage.length === 50) {
        event.target.disabled = true;
      }
    }, 800);
  }
  ngOnInit() {
  }

}
