import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications.component';


const routes: Routes = [
    {
        path: '',
        component: NotificationsComponent
    }]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotificationsRoutingModule { }