import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject, tap, Subscription, timer } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, throwError } from 'rxjs';
import { AccessToken } from '../shared/access-token.model';
import { environment } from 'src/environments/environment';
import { userForm } from '../shared/userForm.model';
import { PopUpService } from '../shared/pop-up/pop-up.service';



@Injectable({ providedIn: 'root' })
export class AuthService {

  public accessToken$ = new BehaviorSubject<AccessToken>(null);
  public isAuth$ = new BehaviorSubject<boolean>(false);
  public isLoadingAuth$ = new BehaviorSubject<boolean>(false);
  private timerSubscription: Subscription;
  private popUpSub: Subscription;

  constructor(
    private http: HttpClient,
    private router: Router,
    private popUpService: PopUpService) { }

  // Requests
  async signupRequest(user: userForm): Promise<any> {
    const body = {
      'email': user.email,
      'password': user.password
    }

    return this.http.post<{ message: string, state: string }>(environment.serverURL + "user/signup", body, { observe: 'response' })
    .subscribe({
      next: response => this.handleResponse(response),
      error: error => this.handleError(error)
    })
  }
  loginRequest(user: userForm): void {
    const body = {
      'email': user.email,
      'password': user.password
    }
    this.http.post<AccessToken>(environment.serverURL + "user/login", body, { observe: 'response' })
      .subscribe(response => {
        if (response.status === 200) {
          this.isAuth$.next(true);
          this.accessToken$.next(response.body)
          this.router.navigate(['../../home']);
        };
        this.isLoadingAuth$.next(false);
      })
  }
  refreshTokenRequest(): void {

    this.http.get<AccessToken>(environment.serverURL + "refresh-token", { observe: 'response' })
      .subscribe(response => {
        if (response.status === 200) {
          this.isAuth$.next(true);
          this.accessToken$.next(response.body)
        }
        else {
          this.isAuth$.next(false);
          this.accessToken$.next(null);
          this.isLoadingAuth$.next(false);
        }
      })
  }
  async forgotPasswordRequest(email: string): Promise<any> {
    const body = {
      email: email
    }
    return this.http.post<{ message: string, state: string }>(environment.serverURL + "forgot-password", body, { observe: 'response' })
      .subscribe({
        next: response => this.handleResponse(response),
        error: error => this.handleError(error)
      })
  }

  // Auth Methods
  autoRefreshJwtToken(): void {
    console.log('refreshTokenRequest is running')
    this.refreshTokenRequest();

    this.accessToken$.subscribe(token => {

      if (!token) { return }
      console.log('Recieved token: ' + token.accessToken)

      const expirationTime = +token.expiresIn.replace('s', "");
      const refreshTime = (expirationTime - 100) * 1000;
      console.log('Token expires in: ' + expirationTime + 's')
      this.timerSubscription = timer(refreshTime)
        .subscribe(() => {
          this.refreshTokenRequest();
          this.timerSubscription.unsubscribe();
        });
    });
  }

  logOut(): void {
    this.accessToken$.next(null);// Stops autoRefreshJwtToken
    this.isAuth$.next(false);
    this.timerSubscription.unsubscribe();
    this.router.navigate(['/auth'])
  }

  handleResponse(response: HttpResponse<any>): string {
    switch (response.body.state) {

      case 'SUCCESS_NEW_USER':
        this.popUp('Successfully added new account ', 'success');
        return 'SUCCESS';

      default:
        return 'SUCCESS';
    }
  }
  handleError(error): string {
    console.log(error.state)
    switch (error.state) {
      case 'ALREADY_EXISTS':
        this.popUp('Email already exists', 'warning');
        return 'ALREADY_EXISTS';

      case 'ERROR_DB':
        this.popUp('Error in database', 'error');
        return 'SERVER_ERROR';

      default:
        this.popUp('Internal server error', 'error');
        return 'SERVER_ERROR';
    }
  }

  popUp(message: string, type: string) {
    this.popUpService.showPopUp.next({ message: message, type: type });
  }

  // private handleError(error: HttpErrorResponse) {

  //   var errorMessage: string = 'Unknown Error';
  //   if (!error.error || !error.error.error) {
  //     throw new Error(errorMessage) ;
  //   }
  //   switch (error.error.error.message) {
  //     case 'EMAIL_NOT_FOUND': errorMessage = 'Email was not found'; break;
  //     case 'INVALID_PASSWORD': errorMessage = 'Email or password is incorrect'; break;
  //     case 'USER_DISABLED': errorMessage = 'The user has been disabled'; break;
  //     case 'EMAIL_EXISTS': errorMessage = 'Email already exists'; break;
  //     case 'OPERATION_NOT_ALLOWED': errorMessage = 'signing in was disabled'; break;
  //     case 'TOO_MANY_ATTEMPTS_TRY_LATER': errorMessage = 'Too many atemps try later'; break;
  //   }
  //   throw new Error(errorMessage)
  // }
}
