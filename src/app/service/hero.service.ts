import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  sourceURL: string = 'http://localhost:3000/heroes'

  constructor(
    private http: HttpClient
  ) { }

  getAllData(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.sourceURL);
  }

  getOneData(id: number | string): Observable<Hero> {
    return this.http.get<Hero>(`${this.sourceURL}/${id}`);
  }

  createData(hero: Hero): Observable<any> {
    return this.http.post<Observable<any>>(this.sourceURL, hero);
  }

  updateData(hero: Hero): Observable<any> {
    return this.http.put(`${this.sourceURL}/${hero.id}`, hero);
  }

  deleteOneData(hero: any): Observable<any> {
    hero = hero.id ? hero.id : hero;
    return this.http.delete(`${this.sourceURL}/${hero}`);
  }

  deleteAllData(): Observable<any> {
    return this.http.delete(this.sourceURL);
  }

}
