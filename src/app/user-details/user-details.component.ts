import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UserService } from '../user.service';
import { iuser } from '../users';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute, private router: Router, private UserService: UserService) { }

  uid: any;
  todo: iuser;

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.uid = params.get('id');
      this.getuserById(this.uid)
    });
  }

  back() { this.router.navigate(["/todos"]) }

  getuserById(id: number) { this.UserService.getuserById(id).subscribe(dataa => { this.todo = dataa; }); }

}
