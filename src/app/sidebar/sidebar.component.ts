import { Subscription } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit,OnDestroy {

  /* Alert Counters */
  dashboardCounter:number=0;
  notificationCoutner:number=0;
  accountCounter:number=0
  //Active link
  activeLink:string='';
  // Subscriptions
  activeLinkSub:Subscription;

  constructor(private sidebarService:SidebarService) { }

  ngOnInit(): void {
    this.activeLinkSub = this.sidebarService.activeLink
    .subscribe((activeLink)=>
    {
      this.activeLink=activeLink;
    })
  }

  clickedLink(linkName:string){
    this.sidebarService.updateActiveLink(linkName);
  }
  ngOnDestroy(): void {
    this.activeLinkSub.unsubscribe()
  }
}
