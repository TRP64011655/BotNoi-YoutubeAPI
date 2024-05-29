import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');

    if (email && password && username && token) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
