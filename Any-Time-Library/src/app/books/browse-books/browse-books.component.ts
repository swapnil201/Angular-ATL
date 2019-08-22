import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book.model';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.scss'],
  providers: [BooksService]
})
export class BrowseBooksComponent implements OnInit {

  constructor( private bookService: BooksService ) { }

  public books: any;

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      data => { this.books = data[0] },
      err => console.error(err),
      () => console.log(this.books)
    );
  }

}
