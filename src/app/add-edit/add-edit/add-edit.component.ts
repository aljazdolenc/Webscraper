import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  public offerOptions:string[]=['All','New','Used'];
  public locationOptions:string[]=['All','Europe','Germany'];
  constructor() { }

  ngOnInit(): void {
  }

}
