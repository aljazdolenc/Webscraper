import { BehaviorSubject } from 'rxjs';

import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SidebarService {
  activeLink = new BehaviorSubject<string>(undefined);
  sidebarStatus$ = new BehaviorSubject<boolean>(true);

  public updateActiveLink(activeLink: string) {
    this.activeLink.next(activeLink);
    localStorage.setItem('LastActiveLink', activeLink)
  }
  public updateLinkLS() {
    this.activeLink.next(localStorage.getItem('LastActiveLink'))
  }
  public closeSidebar(): void {
    this.sidebarStatus$.next(false);
  }
  public openSidebar(): void {
    this.sidebarStatus$.next(true);
  }

}
