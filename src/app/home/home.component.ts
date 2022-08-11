import { BehaviorSubject } from 'rxjs';
import { SidebarService } from './../sidebar/sidebar.service';
import { Component} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  public sidebarStatus$:BehaviorSubject<boolean>;

  constructor(private sidebarService:SidebarService)
  {
   this.sidebarStatus$=this.sidebarService.sidebarStatus$;
  }

  public observeSidebarStatus(){
    return this.sidebarStatus$;
  }


}
