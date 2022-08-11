import { DashboardComponent } from './dashboard.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SwiperToolModule } from '../shared/swiper/swiper.module';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        DashboardRoutingModule,
        SwiperToolModule
    ],
    bootstrap: [DashboardModule]
})
export class DashboardModule {}
