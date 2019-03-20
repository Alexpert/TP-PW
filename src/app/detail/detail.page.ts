import { Component, OnInit } from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  film: Film;

  constructor() {
    this.film = {title: 'Un gros film bien déter'};

  }

  ngOnInit() {
  }

}
