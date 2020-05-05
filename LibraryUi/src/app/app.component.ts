import {Component, OnInit} from '@angular/core';
import {BookService} from './service/book.service';
import {BookModel} from './model/book.Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit{
constructor(private bookService: BookService) {}


  ngOnInit() {
  }





}
