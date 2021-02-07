import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './model/hero';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myHero: Hero | undefined;
  listObservable: Observable<any>;

  constructor(
    private fservice: FootballService,
    private hservice: HeroService
  ) {
    this.listObservable = new Observable(observer => {
      let delay = setTimeout(() => {
        observer.next('I am here!');
      }, 15000);

      let nextDelay = setTimeout(() => {
        observer.complete();
      }, 20000);
    });
    this.listObservable.subscribe(
      value => console.log(value),
      error => console.error(error),
      () => console.log('Complited!')
    );


    this.listObservable = hservice.getAllData();


    this.hservice.getAllData().forEach(value => {
      console.log('All hero:', value)
    });

    this.hservice.getOneData(2).forEach(value => {
      console.log('Second hero:', value)
    });

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
 */  }

  setHero(hero: Hero): void {
    this.myHero = hero;
  }
}
