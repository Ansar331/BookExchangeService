import { Injectable } from '@angular/core';
import {Token} from "../shared/django-models";
import {ApiService} from './api.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService extends ApiService  {

  constructor(http: HttpClient) {super(http); }

  signup(username: any, email: any, password: any): Promise<Token> {
    return this.post('http://localhost:8000/api/signup/', {username, password, email})
    }
  }
