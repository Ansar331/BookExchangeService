import { Component, OnInit } from '@angular/core';
import {Post} from "../../shared/django-models";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts: Post[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().then(res => {
      this.posts = res;
    });
  }

  contact(id: number) {
    this.dataService.contactById(id);
    alert('Request was send!');
  }

}
