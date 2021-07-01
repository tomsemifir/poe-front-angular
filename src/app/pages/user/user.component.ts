import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User;
  userForm : FormGroup;

  constructor(
    private service : UserService,
    private route : ActivatedRoute,
    private fb : FormBuilder
    ) { 
      this.userForm = this.fb.group({
        nom : "",
        prenom : "",
        age : 0
      })
    }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.service.findById(id).subscribe(data => {
      this.user = data;
    })
  }

  modifierUser = () => {
    
  }

}
