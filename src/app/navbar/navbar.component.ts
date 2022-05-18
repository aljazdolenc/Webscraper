import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mode:string='day';
  defaultMode:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  changeMode(mode:string){
    this.mode=mode;
    this.defaultMode=false;
  }

}
