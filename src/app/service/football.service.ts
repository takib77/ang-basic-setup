import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  jsonURL: string = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/es.1.clubs.json'

  constructor(
    private http: HttpClient
  ) {
    this.http.get(this.jsonURL).subscribe(
      list => console.log('Football list', list),
      error => console.error(error),
      () => console.log('Ready')
    )
  };
}
