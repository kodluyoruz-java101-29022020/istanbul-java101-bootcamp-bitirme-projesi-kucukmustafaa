import { Injectable } from '@angular/core';
import {AppConstant} from '../app.constant';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BookModel} from '../model/book.Model';

@Injectable()
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  getBookList(): Observable<any> {
    const url = AppConstant.API_ENDPOINT + 'book/list';
    return this.httpClient.get(url).pipe(
      map((data: any[]) =>
        data.map(
          (item: any) => new BookModel(item.id, item.name, item.iSBN, item.description, item.category)
        )
      )
    );
  }
}
