import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  loginUser(value) {
    this.authService.doLogin(value);
    this.router.navigate(['']);
  }

  registerUser() {
    this.router.navigate(['auth/register']);
  }

  googleLogin() {
    this.authService.doGoogleLogin();
  }
}
