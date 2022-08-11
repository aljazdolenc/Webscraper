import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { SpinnerComponent } from '../shared/spinner/spinner.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent,
    SpinnerComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent]
})
export class AuthModule { }
