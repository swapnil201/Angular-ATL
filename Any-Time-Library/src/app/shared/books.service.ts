import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

// Service to search, insert, update or delete books data.

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BooksService {

  baseUrl: string = "http://localhost:3000";
  constructor(private client: HttpClient) { }

  getBooks() {
    return forkJoin(
      this.client.get(this.baseUrl + '/books')
    );
  }
}
