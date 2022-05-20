import { DashboardService } from './../dashboard/dashboard.service';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { Notification } from '../shared/Notification.model';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    notificationsArray: Notification[] = []
    constructor(private dashboardService:DashboardService) { }

    fillArray() {
        this.dashboardService.getItemList().forEach(cardDeal => {
            const myDate = formatDate(new Date(),'dd/MM/yyyy','en')
            const newNotification = new Notification(myDate, cardDeal)
            this.notificationsArray.push(newNotification)
        })
        console.log(this.notificationsArray)
    }

    getNotificationsList(){
        return this.notificationsArray.slice()
    }
}
