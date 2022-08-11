import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  isLoading: boolean = false;
  emailForm: FormControl;
  isLoadingAuth$:Subscription;
  serverResponse:string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.emailForm=new FormControl('', [Validators.required, Validators.email]);
    this.isLoadingAuth$=this.authService.isLoadingAuth$.subscribe(isLoading => {
      this.isLoading = isLoading;
    })
  }

  onSubmit(){
    this.authService.isLoadingAuth$.next(true);
    const email = this.emailForm.value;
    this.forgotPassword(email);
  }

  async forgotPassword(email:string):Promise<void>{
   this.serverResponse=await this.authService.forgotPasswordRequest(email);
   this.isLoading= false;
  }

  invalidEmail():boolean{
    const emailInput=this.emailForm;
    return (emailInput.hasError('required')|| emailInput.hasError('email')) && emailInput.touched;
  }

  ngOnDestroy():void{
    this.isLoadingAuth$.unsubscribe();
  }

}
