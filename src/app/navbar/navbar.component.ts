import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  //Dark Light mode variable
  mode: string = 'day';
  
  defaultMode: boolean = true;
  headingText: string;

  //Subscriptions
  headingSub: Subscription;

  constructor(private sidebarService: SidebarService) { }


  ngOnInit(): void {

    this.checkMode()
    this.headingSub = this.sidebarService.activeLink
      .subscribe((heading:string) => {
        if(heading){
          this.headingText= heading
        }else{
          this.sidebarService.updateLinkLS()
        }
      })

  }

  changeMode(mode: string) {
    if(this.mode!==mode){
      this.mode = mode;
      this.defaultMode = false;
      localStorage.setItem('nightMode',mode)
      document.body.classList.toggle('dark-theme');
    }
  }
  checkMode(){
    const storedMode= localStorage.getItem('nightMode')
    if(storedMode==='night'){
      document.body.classList.toggle('dark-theme');
    }
  }

  ngOnDestroy(): void {
    this.headingSub.unsubscribe()
  }
}
