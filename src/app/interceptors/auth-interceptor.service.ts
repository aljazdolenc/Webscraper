import { AuthService } from '../auth/auth.service';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headersJson: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    let accessToken: string;

    this.authService.accessToken$.subscribe(token => {
      accessToken = token ? token.accessToken : null;
    })
    if (accessToken) {
      const headersJsonJwt = headersJson.append('Authorization', 'Bearer ' + accessToken);
      return next.handle(req.clone({ headers: headersJsonJwt, withCredentials: true }));
    }
    return next.handle(req.clone({ headers: headersJson, withCredentials: true  }))

  }
}
