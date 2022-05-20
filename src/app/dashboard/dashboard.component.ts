import { CardDeals } from './../shared/card-deals.interface';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  itemsList:CardDeals[]=[]
  

  constructor(
    private dashboardService:DashboardService) { }

  ngOnInit(): void {
   this.itemsList= this.dashboardService.getItemList();

  }

}
