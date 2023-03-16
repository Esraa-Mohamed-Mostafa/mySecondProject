import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iuser } from './users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getusers(): Observable<iuser[]> { return this.http.get<iuser[]>("https://jsonplaceholder.typicode.com/todos") }
  getuserById(id: any): Observable<iuser> { return this.http.get<iuser>(`https://jsonplaceholder.typicode.com/todos/${id}`) }
  ;

}

