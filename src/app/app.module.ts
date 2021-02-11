import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WatchComponent } from './watch/watch.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PrefixPipe } from './pipe/prefix.pipe';
import { DelayDirective } from './directive/delay.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "heroes",
    component: HeroComponent
  },
  {
    path: "heroes/:id",
    component: HeroDetailComponent
  },
  {
    path: "watch",
    component: WatchComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    HeroDetailComponent,
    PrefixPipe,
    DelayDirective,
    HighlightDirective,
    NavComponent,
    HomeComponent,
    HeroComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FootballService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
