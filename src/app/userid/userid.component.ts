import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { iuser } from '../users';


@Component({
  selector: 'app-userid',
  templateUrl: './userid.component.html',
  styleUrls: ['./userid.component.css']
})
export class UseridComponent {
  constructor(private UserService: UserService, private router: Router) { }
  userIdData: iuser[];
  ngOnInit(): void {
    this.UserService.getusers().subscribe(data => { this.userIdData = data; });
  }


}
