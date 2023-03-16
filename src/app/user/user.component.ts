import { Component, OnInit } from '@angular/core';
import { iuser } from '../users';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private UserService: UserService, private router: Router) { }

  userlist: iuser[] = [];
  completedToDo: iuser[] = [];
  notCompleted: iuser[] = [];

  ngOnInit(): void {
    this.UserService.getusers().subscribe(data => { this.userlist = data; this.userFilter(); });

  }

  userFilter() {
    for (let i = 0; i < this.userlist.length; i++) {
      if (this.userlist[i].completed == true) {
        this.completedToDo.push(this.userlist[i]);

      }
      else { this.notCompleted.push(this.userlist[i]); }
    }
  }

  open(id: any) {
    this.router.navigate(['todos', id]);
  }


}