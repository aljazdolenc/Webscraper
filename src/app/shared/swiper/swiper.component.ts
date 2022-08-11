import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { CardDeals } from '../card-deals.interface';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperContainerComponent {

  @Input() itemList:CardDeals[]=[];

  readonly swiperBreakpoints: {} = {
      '640': {
        slidesPerView: 2,
        spaceBetween: 20
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 40
      },
      '1024': {
        slidesPerView: 3.25,
        spaceBetween: 50
      }
    }

   config: SwiperOptions = {
    breakpointsBase: 'container',
    allowSlideNext: true,
    allowSlidePrev: true,
    allowTouchMove: true,
    slidesPerView:'auto',
    spaceBetween: 40,
    pagination: {clickable: true},
  }
}
