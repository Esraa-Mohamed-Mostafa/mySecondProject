import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private profileservice: ProfileService) { }
  list: any;
  table: any;
  ngOnInit(): void { this.get(); } get() { this.table = this.profileservice.details; console.log(this.table) }

}
