import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  loginForm: FormGroup;
  error: string = null;
  isLoadingAuth$:Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
    this.isLoadingAuth$=this.authService.isLoadingAuth$.subscribe(isLoading => {
      console.log('changed')
      this.isLoading = isLoading;
    })
  }

  onSubmit(){
    this.isLoading = true;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.login(email, password);
    this.loginForm.reset();
  }

  login(email:string, password:string):void{
    this.authService.loginRequest({email, password});
    // this.isLoading= false;
  }

  invalidEmail():boolean{
    const emailInput=this.loginForm.get('email');
    return (emailInput.hasError('required')|| emailInput.hasError('email')) && emailInput.touched;
  }

  invalidPassword():boolean{
    const passwordInput=this.loginForm.get('password');
    return (passwordInput.hasError('required') || passwordInput.hasError('minlength')) && passwordInput.touched;
  }

  ngOnDestroy():void{
    this.isLoadingAuth$.unsubscribe();
  }
}
