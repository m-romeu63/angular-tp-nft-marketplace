import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: UserLogin = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    console.log(this.user.email);
    console.log(this.user.password);
    this.router.navigate(['']);
  }

}
