import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-momentjs',
  templateUrl: './momentjs.page.html',
  styleUrls: ['./momentjs.page.scss'],
})
export class MomentjsPage implements OnInit {

  date_time_current: any = "Data e hora";
  star_of_year: any = "Inicio do ano atual";


  constructor() { }

  ngOnInit() {

  }

  showDate_Time() {
    this.date_time_current = moment().format('DD/MM/YYYY, HH:mm:ss');
  }

  showStartofYear() {
    this.star_of_year = moment().startOf('year').format('DD/MM/YYYY, HH:mm:ss');
  }


}
