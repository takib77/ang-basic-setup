import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';
import { FootballService } from '../service/football.service';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  myHero: Hero | undefined;
  heroList: Observable<any>;

  constructor(
    private fservice: FootballService,
    private hservice: HeroService,
    private router: Router
  ) {
    this.heroList = new Observable(observer => {
      let delay = setTimeout(() => {
        observer.next('I am here!');
      }, 15000);

      let nextDelay = setTimeout(() => {
        observer.complete();
      }, 20000);
    });
    this.heroList.subscribe(
      value => console.log(value),
      error => console.error(error),
      () => console.log('Complited!')
    );

    this.heroList = hservice.getAllData();

    this.hservice.getAllData().forEach(value => {
      console.log('All hero:', value)
    });

    this.hservice.getOneData(2).forEach(value => {
      console.log('Second hero:', value)
    });
  }

  /*     this.hservice.createData({ id: 4, name: 'Destiny', address: 'Bp', superpower: 'Lucky' })
  .forEach(value => {
    console.log('New hero:', value)
      });  
      
    this.hservice.updateData({ id: 2, name: 'Elemental Hero Neos', address: 'London', superpower: 'Cosmic' })  
    .forEach(value => {
      console.log('Updated hero:', value)
    });  
  
    this.hservice.deleteOneData(3).forEach(value => {
      console.log('Deleted third hero:', value)
    });  
  
    this.hservice.deleteAllData().forEach(value => {
      console.log('Deleted all hero:', value)
    });    
    */

  ngOnInit(): void {
  }

  setHero(hero: Hero): void {
    this.myHero = hero;
  }

  jumpToHero(hero: Hero): void {
    this.router.navigateByUrl(`/heroes/${hero.id}`)
  }

}
