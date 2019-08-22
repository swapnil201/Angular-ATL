import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

// Service to search, insert, update or delete books data.

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return forkJoin(
      this.http.get('http://localhost:3000/books')
    );
  }
}
