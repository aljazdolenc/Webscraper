import { BehaviorSubject } from 'rxjs';

import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class SidebarService{
  activeLink= new BehaviorSubject<string>('DAILY NEWS')

  updateActiveLink(activeLink:string){
      this.activeLink.next(activeLink);
  }
}