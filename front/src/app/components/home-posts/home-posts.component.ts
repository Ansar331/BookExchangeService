import { Component, OnInit } from '@angular/core';
import {Book, Post} from "../../shared/django-models";
import {UserDataService} from "../../services/user-data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateDataService} from "../../services/create-data.service";

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.scss']
})
export class HomePostsComponent implements OnInit {

  public ownPosts: Post[] = [];
  public ownBooks: Book[] = [];
  public image: string;

  edittedId: number = 0;

  firstFormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
  });
  secondFormGroup = new FormGroup({
    body: new FormControl('', Validators.required),
  });
  thirdFormGroup = new FormGroup({
    book: new FormControl('', Validators.required),
  });


  constructor(private userDataService: UserDataService, private createDataService: CreateDataService) { }

  ngOnInit() {
    this.userDataService.getOwnPosts().then(res => {
      this.ownPosts = res;
    });
    this.userDataService.getOwnBooks().then(res => {
      this.ownBooks = res;
    });
  }

  createPost() {
      this.createDataService.createPost(this.firstFormGroup.value['title'],
      this.secondFormGroup.value['body'],
      this.thirdFormGroup.value['book']).then(res => {this.ownPosts.push(res)});
  }

  deletePost(postId: number) {
    this.createDataService.deletePost(postId).then( res =>
      this.userDataService.getOwnPosts().then(r => {
        this.ownPosts = r;
      })
    )
  }
  selectPost(post: Post) {
    this.edittedId = post.id;
  }

  editPost(post: Post) {
    this.createDataService.updatePost(post).then( res => {
      this.edittedId = 0;
    });
  }

}
