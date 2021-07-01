import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[];

  constructor(private service : UserService) { }

  ngOnInit(): void {
    this.initUsers();
  }

  deleteUser = (user : User) => {
    this.service.delete(user.id).subscribe( () => {
      this.initUsers();
    })
  }

  initUsers = () => {
    this.service.findAll().subscribe(data => {
      this.users = data;
    })
  }

}
