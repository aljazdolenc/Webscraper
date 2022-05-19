import { NotificationsService } from './notifications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private notificationsService:NotificationsService) { }

  ngOnInit(): void {
    this.notificationsService.fillArray()
  }

}
