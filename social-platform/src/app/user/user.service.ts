import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {id: 1, name: "AAAA"},
    {id: 2, name: "BBBB"}
  ];


  constructor() { }

  getUsers() {
    return of(this.users);
  }
}
