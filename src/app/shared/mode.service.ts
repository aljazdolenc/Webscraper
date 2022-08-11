import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
Injectable({providedIn: 'root'})
export class ModeService{
     isDarkMode= new BehaviorSubject<boolean>(true);
     isDarkModeState= false;

     ChangeMode(){
         this.isDarkModeState= !this.isDarkModeState
         this.isDarkMode.next(this.isDarkModeState)
     }
}
