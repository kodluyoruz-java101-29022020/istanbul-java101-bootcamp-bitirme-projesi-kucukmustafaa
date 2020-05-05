import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) {}

  public books: Array<any>;

  ngOnInit() {
    this.matchData();
  }

  matchData(){
    this.bookService.getBookList().subscribe((data: any) => {
      console.log(data);
      this.books = data;
    });
  }



}
