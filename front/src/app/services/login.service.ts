import { Injectable } from '@angular/core';
import {Token} from "../shared/django-models";
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends ApiService {

  constructor(http: HttpClient) {super(http); }

  login(username: any, password: any): Promise<Token> {
    return this.post('http://localhost:8000/api/login/', {username: username, password});
  }

  logout(): Promise<any> {
    return this.delete('http://localhost:8000/api/logout/', {});
  }
}
