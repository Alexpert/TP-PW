import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Film } from '../film';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  films: Film[] = [];

  constructor(
    private readonly router: Router
  ) {
    for (let i: number = 0; i < 20; i++) { //TODO: Dégager ça
      this.films.push({title: 'Film' + i});
    }
  }

  log(
    film: Film
  ) {
    console.log(film.title);
  }
}
