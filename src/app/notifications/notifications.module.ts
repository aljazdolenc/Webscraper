import { NotificationsComponent } from './notifications.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotificationsRoutingModule } from "./notifications-routing.module";



@NgModule({
    declarations: [
        NotificationsComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        NotificationsRoutingModule
    ],
    bootstrap: [NotificationsModule]
})
export class NotificationsModule {}