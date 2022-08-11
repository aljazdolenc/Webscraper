import { PopUpMessage } from './../popUpMessage';
import { PopUpService } from './pop-up.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit, OnDestroy {

  popUpMessage: string = null;
  popUpType: string = null;
  hidePopUp: boolean = false;
  showtime: number = 4000;
  timeout: any;
  popUpSub: Subscription;

  constructor(private popUpService: PopUpService) { }

  ngOnInit() {
    this.popUpSub = this.popUpService.showPopUp.subscribe(messageObj => {
      if (messageObj) { this.showPopUp(messageObj) }
    })
  }

  showPopUp(messageObj: PopUpMessage): void {
    console.log('showPopUp', messageObj);
    this.popUpMessage = messageObj.message;
    this.popUpType = messageObj.type;

    this.timeout = setTimeout(() => this.closePopUp(), this.showtime + 1000);
  }

  closePopUp(): void {
    clearTimeout(this.timeout);
    this.hidePopUp = true;
    setTimeout(() => {this.popUpMessage=null;this.hidePopUp = false}, 1000);
  }

  ngOnDestroy(): void {
    this.popUpSub.unsubscribe();
  }
}
