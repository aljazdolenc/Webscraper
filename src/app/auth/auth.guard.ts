import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.isAuth$
            .pipe(
                take(1),
                map(isAuth => {
                    return isAuth ? true : this.router.createUrlTree(['/auth']);
                })
            );
    }
}
