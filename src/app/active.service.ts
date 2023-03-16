import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Router,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {
  checkUsernamePassword(uname: string, pwd: string) {
    if (uname == "esraa" && pwd == "12345") {
      localStorage.setItem('username', "admin");
      return true;
    } else { return false; }
  }
}


