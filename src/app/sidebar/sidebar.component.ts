import { SidebarService } from './sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  /* Alert Counters */
  dashboardCounter:number=0;
  notificationCoutner:number=0;
  accountCounter:number=0
  //Active link
  activeLink:string='';

  constructor(private sidebarService:SidebarService) { }

  ngOnInit(): void {
  }

  clickedLink(linkName:string){
    this.activeLink=linkName;
    console.log(this.activeLink)
  }
}
