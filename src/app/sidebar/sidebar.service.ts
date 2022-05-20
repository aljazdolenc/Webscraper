import { BehaviorSubject } from 'rxjs';

import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class SidebarService{
  activeLink= new BehaviorSubject<string>(undefined)

  updateActiveLink(activeLink:string){
      this.activeLink.next(activeLink);
      localStorage.setItem('LastActiveLink',activeLink)
  }
  updateLinkLS(){
    this.activeLink.next(localStorage.getItem('LastActiveLink'))
  }
}