import { NotificationsService } from './notifications.service';
import { Component, OnInit } from '@angular/core';
import { Notification } from '../shared/Notification.model';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  spinClass:boolean=false;
  notificationsList:Notification[]=[]
  constructor(private notificationsService:NotificationsService) { }

  ngOnInit(): void {
    this.notificationsService.fillArray()
    this.notificationsList=this.notificationsService.getNotificationsList()
  }
  spin(){
    this.spinClass=true;
    setTimeout(()=>{this.spinClass=false},1500)
  }
}
