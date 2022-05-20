import { NotificationsService } from './notifications.service';
import { Component, OnInit } from '@angular/core';
import { Notification } from '../shared/Notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notificationsList:Notification[]=[]
  constructor(private notificationsService:NotificationsService) { }

  ngOnInit(): void {
    this.notificationsService.fillArray()
    this.notificationsList=this.notificationsService.getNotificationsList()
  }

}
