import { Injectable } from '@angular/core';
import {Book, Post, Profile} from "../shared/django-models";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private apiService: ApiService) {}

  getOwnPosts(): Promise<Post[]> {
    return this.apiService.get('http://localhost:8000/api/home/',  {});
  }

  getOwnBooks(): Promise<Book[]> {
    return this.apiService.get('http://localhost:8000/api/books/',  {});
  }

  getProfile(): Promise<Profile[]>  {
    return this.apiService.get('http://localhost:8000/api/profile/',  {});
  }
}
