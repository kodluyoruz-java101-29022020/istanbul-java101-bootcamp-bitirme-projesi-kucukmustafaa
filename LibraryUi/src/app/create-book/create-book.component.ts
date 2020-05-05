import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      iSBN: '',
      description: '',
      category: ''
    });
  }

  ngOnInit() {
  }

}
