import { Subscription } from 'rxjs';
import { SidebarService } from './sidebar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit,OnDestroy {
  dashboardCounter:number=0;
  notificationCoutner:number=0;
  accountCounter:number=0
  activeLink:string='';
  activeLinkSub:Subscription;

  constructor(private sidebarService:SidebarService) { }

  ngOnInit(): void {
    this.activeLinkSub = this.sidebarService.activeLink
    .subscribe((activeLink)=>
    {
      this.activeLink=activeLink;
    })
  }
  public clickedLink(linkName:string){
    this.sidebarService.updateActiveLink(linkName);
  }
  public closeSidebar(){
    this.sidebarService.closeSidebar();
  }
  ngOnDestroy(): void {
    this.activeLinkSub.unsubscribe()
  }
}
