import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveService } from '../active.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private service: ActiveService, private routes: Router) {
  }
  check(usname: string, p: string) {
    var output = this.service.checkUsernamePassword(usname, p);
    if (output == true) { this.routes.navigate(['/todos']); }
    else { alert('invalid username or password') }
  }
}
