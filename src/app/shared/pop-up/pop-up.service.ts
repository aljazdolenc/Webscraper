import { PopUpMessage } from './../popUpMessage';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  showPopUp = new BehaviorSubject<PopUpMessage>(null);

  constructor() { }

}
