import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  darkMode: boolean = false;
  headingText: string;
  sidebarStatus$: BehaviorSubject<boolean>;
  headingSub: Subscription;

  constructor(private sidebarService: SidebarService)
  {
    this.sidebarStatus$ = this.sidebarService.sidebarStatus$;
   }

  ngOnInit(): void {

    this.checkMode()
    console.log(this.darkMode)
    this.headingSub = this.sidebarService.activeLink
      .subscribe((heading:string) => {
        if(heading){
          this.headingText= heading
        }else{
          this.sidebarService.updateLinkLS()
        }
      })

  }

  changeMode() {
    this.darkMode=!this.darkMode
      localStorage.setItem('isDarkMode',this.darkMode.toString())
      document.body.classList.toggle('dark-theme');
  }
  checkMode(){
    const storedMode= localStorage.getItem('isDarkMode')
    if(storedMode === 'true'){
      this.darkMode=true;
      document.body.classList.toggle('dark-theme');
    }
  }
  openSidebar() {
    this.sidebarService.openSidebar();
  };

  ngOnDestroy(): void {
    this.headingSub.unsubscribe()
  }
}
