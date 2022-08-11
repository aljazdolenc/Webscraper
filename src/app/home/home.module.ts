import { SwiperToolModule } from './../shared/swiper/swiper.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeRoutingModule } from './home-routing.module';
import { SwiperContainerComponent } from '../shared/swiper/swiper.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    MatSidenavModule,
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
  ]
})
export class HomeModule { }
