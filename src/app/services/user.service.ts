import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  findAll = () => {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  findById = (id : number) => {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  delete = (id : number) => {
    return this.http.delete<User>(`${environment.apiUrl}/users/${id}`);
  }

  create = (user : User) => {
    return this.http.post<User>(`${environment.apiUrl}/users`, user);
  }

  update = (user : User) => {
    return this.http.put<User>(`${environment.apiUrl}/users/${user.id}`, user);
  }
}
