import { Component, Input, OnInit } from '@angular/core';
import { CardDeals } from '../../card-deals.interface';

@Component({
  selector: 'swiper-card',
  templateUrl: './swiper-card.component.html',
  styleUrls: ['./swiper-card.component.css']
})
export class SwiperCardComponent {
  @Input()item:CardDeals;


}
