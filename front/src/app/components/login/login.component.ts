import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";

import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private service: LoginService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['home']);
    }
  }

  login() {
    if (this.username !== '' && this.password !== '') {
      this.service.login(this.username, this.password).then(res => {localStorage.setItem('token', res.token);
        this.router.navigate(['home']);
      });
    }
  }

}

