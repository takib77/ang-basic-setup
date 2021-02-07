import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WatchComponent } from './watch/watch.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PrefixPipe } from './pipe/prefix.pipe';
import { DelayDirective } from './directive/delay.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    HeroDetailComponent,
    PrefixPipe,
    DelayDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FootballService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
