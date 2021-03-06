import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero = new Hero;
  superPowers: string[] = ['Magnetic', 'Cosmic', 'Windstorm', 'Lucky', 'Teleport', 'Time travel'];

  constructor(
    private hService: HeroService,
    private aRoute: ActivatedRoute
  ) {
    this.aRoute.params.subscribe(params => {
      this.hService.getOneData(params.id).forEach(hero => {
        this.hero = hero;
      })
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.hService.updateData(this.hero)
      .forEach(value => {
        console.log('Updated hero:', value)
      });
  }
}
