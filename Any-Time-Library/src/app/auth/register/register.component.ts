import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {

   }

   regiForm = new FormGroup({
    username : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    cpassword : new FormControl()
   });

  ngOnInit() {
  }

  tryRegister(value: any) {
    this.authService.doRegister(value);
    this.router.navigate(['']);
  }

  async googleLogin() {
   let result = await this.authService.doGoogleLogin();
   let newUser: User;
   if (result) {
    newUser.email = result.user.email;
    newUser.userName = result.user.displayName;
    newUser.password = "",
    newUser.isActive = true,
    newUser.role = "user"
  }
    await this.authService
    .addUser(newUser)
    .subscribe();

    this.router.navigate(['']);
  }
}
