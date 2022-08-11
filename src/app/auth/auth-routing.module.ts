import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
    {path: '', component: AuthComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login',component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      {path: 'forgot-password', component: ForgotPasswordComponent},
      { path: '**', redirectTo: 'login' }
]}

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
