import { Component, OnInit, enableProdMode } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public readonly notificationsPreferences: string[] = ['Email', 'Push Notification'];
  ngOnInit(): void {
  }

}
