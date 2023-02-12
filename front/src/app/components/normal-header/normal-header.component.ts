import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-normal-header',
  templateUrl: './normal-header.component.html',
  styleUrls: ['./normal-header.component.scss']
})
export class NormalHeaderComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.service.logout().then(res => {
    });
  }


}
