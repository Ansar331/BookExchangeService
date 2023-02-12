import { Component, OnInit } from '@angular/core';
import {Book} from "../../shared/django-models";
import {UserDataService} from "../../services/user-data.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateDataService} from "../../services/create-data.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public ownBooks: Book[] = [];
  edittedId: number = 0;

  firstFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  secondFormGroup = new FormGroup({
    author: new FormControl('', Validators.required),
  });
  thirdFormGroup = new FormGroup({
    year: new FormControl('', Validators.required),
  });
  fourthFormGroup = new FormGroup({
    category: new FormControl('', Validators.required),
  });
  fifthFormGroup = new FormGroup({
    genre: new FormControl('', Validators.required)});


  constructor(private _formBuilder: FormBuilder, private userDataService: UserDataService, private createDataService: CreateDataService) { }

  ngOnInit() {
    this.userDataService.getOwnBooks().then(res => {
      this.ownBooks = res;
    });
  }

  createBook() {
    this.createDataService.createBook(this.firstFormGroup.value['name'],
      this.secondFormGroup.value['author'],
      this.thirdFormGroup.value['year'].substring(0, 4),
      this.fourthFormGroup.value['category'],
      this.fifthFormGroup.value['genre']).then(res => {this.ownBooks.push(res)});
  }

  deleteBook(bookId: number) {
    this.createDataService.deleteBook(bookId).then( res =>
      this.userDataService.getOwnBooks().then(r => {
        this.ownBooks = r;
      })
    )
  }

  selectBook(book: Book) {
    this.edittedId = book.id;
  }

  editBook(book: Book) {
    //book.year = book.year.substring(0,4);
    this.createDataService.updateBook(book).then( res => {
      this.edittedId = 0;
    });
  }

}
