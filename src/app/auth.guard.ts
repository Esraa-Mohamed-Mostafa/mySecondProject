import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean {
    if (localStorage.getItem('username') != null) {
      return true
    }
    else {
      this.router.navigate(['/registraion']);
      return false;
    }
  }
}


