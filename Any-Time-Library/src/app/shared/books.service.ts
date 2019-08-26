import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book.model';

// Service to search, insert, update or delete books data.

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BooksService {

  books: Book[];
  baseUrl: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getBooks() {
    return forkJoin(
      this.http.get(this.baseUrl + '/books')
      // .pipe((data: any[]) => data.map((item: any) => new Book(
      //   item.id,
      //   item.isbn,
      //   item.title,
      //   item.description,
      //   item.author,
      //   item.genre,
      //   item.imgPath,
      //   item.rating,
      //   item.totalCopies,
      //   item.issuedCopies,
      //   item.timesIssued,
      //   item.issuedTo)
      // ).push()
      // )
    );
  }
}
