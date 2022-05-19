import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  mode: string = 'day';
  defaultMode: boolean = true;
  headingText: string;
  headingSub: Subscription;

  constructor(private sidebarService: SidebarService) { }


  ngOnInit(): void {

    this.headingSub = this.sidebarService.activeLink
      .subscribe((heading:string) => {
        this.headingText= heading
      })
    console.log(this.headingText)

  }
  changeMode(mode: string) {
    this.mode = mode;
    this.defaultMode = false;
  }



  ngOnDestroy(): void {
    this.headingSub.unsubscribe()
  }
}
