import { PopUpService } from './../../shared/pop-up/pop-up.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading: boolean = false;
  signupForm: FormGroup;
  isLoadingAuth$:Subscription;
  serverResponse:string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'repassword': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    })
    this.isLoadingAuth$=this.authService.isLoadingAuth$.subscribe(isLoading => {
      this.isLoading = isLoading;
    })
  }

  onSubmit(){
    if(!this.signupForm.valid)return;

    this.isLoading = true;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.signup(email, password);
    this.signupForm.reset();
  }

  async signup(email:string, password:string){
    this.serverResponse= await this.authService.signupRequest({email, password});
    this.isLoading= false;
  }

  invalidEmail():boolean{
    const emailInput=this.signupForm.get('email');
    return (emailInput.hasError('required')|| emailInput.hasError('email')) && emailInput.touched;
  }

  invalidPassword():boolean{
    const passwordInput=this.signupForm.get('password');
    return (passwordInput.hasError('required') || passwordInput.hasError('minlength')) && passwordInput.touched;
  }
  passwordsMatch():boolean{
    const passwordInput=this.signupForm.get('password');
    const rePasswordInput=this.signupForm.get('repassword');
    return !(passwordInput.value === rePasswordInput.value) && rePasswordInput.touched;
  };

  ngOnDestroy():void{
    this.isLoadingAuth$.unsubscribe();
  }
}
