import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private service : UserService,
    private router : Router
    ) {
    this.userForm = this.fb.group({
      nom : "",
      prenom : "",
      age : 0
    })
   }

  ngOnInit(): void {
  }

  ajouterUser = () => {
    this.service.create(this.userForm.value).subscribe( () => {
      this.router.navigateByUrl("/users");
    })
  }

}
