import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SwiperCardComponent } from './swiper-card/swiper-card.component';
import { SwiperContainerComponent } from './swiper.component';


@NgModule({
  imports: [
    SwiperModule,
    CommonModule
  ],
  declarations: [
    SwiperCardComponent,
    SwiperContainerComponent
  ],
    exports:[
      SwiperModule,
      SwiperContainerComponent
    ]
})
export class SwiperToolModule { }
