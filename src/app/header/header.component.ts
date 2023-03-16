import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private profileservice: ProfileService) { }
  list: any;
  table: any;
  ngOnInit(): void { this.get(); } get() { this.table = this.profileservice.details; console.log(this.table) }
  logut() {
    localStorage.clear();
    window.location.replace('/registraion');


  }


}
