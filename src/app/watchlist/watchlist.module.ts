import { SwiperToolModule } from './../shared/swiper/swiper.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchlistRoutingModule } from './watchlist-routing.module';
import { WatchlistListComponent } from './watchlist-list/watchlist-list.component';


@NgModule({
  declarations: [
    WatchlistListComponent
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule,
    SwiperToolModule
  ]
})
export class WatchlistModule { }
