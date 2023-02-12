import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
import {Book, Post} from "../shared/django-models";

@Injectable({
  providedIn: 'root'
})
export class CreateDataService extends ApiService {

  constructor(http: HttpClient) {super(http); }


  createBook(name: any, author: any, year: any, category: any, genre: any): Promise<Book> {
    return this.post('http://localhost:8000/api/books/', {name, author, year, category, genre})
  }

  createPost(title: any, body: any, book: any): Promise<Post> {
    return this.post('http://localhost:8000/api/posts/', {title, body, book})
  }

  deletePost(id: any): Promise<any> {
    return this.delete(`http://localhost:8000/api/posts/${id}/`, {})
  }

  deleteBook(id: any): Promise<any> {
    return this.delete(`http://localhost:8000/api/books/${id}/`, {});
  }

  updateBook(book): Promise<any> {
    return this.put(`http://localhost:8000/api/books/${book.id}/`, {
      name: book.name,
      author: book.author,
      year: book.year,
      category: book.category,
      genre: book.genre});
  }

  updatePost(post): Promise<any> {
    return this.put(`http://localhost:8000/api/posts/${post.id}/`, {
      title: post.title,
      body: post.body});
  }

  updateProfile(profile): Promise<any> {
    return this.put(`http://localhost:8000/api/profile/${profile.id}/`, {
      bio: profile.bio,
      location: profile.location,
      birth_date: profile.birth_date,
    user: profile.user});
  }

}
