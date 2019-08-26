import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { Book } from '../../shared/book.model';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.scss'],
  providers: [BooksService]
})
export class BrowseBooksComponent implements OnInit {

  constructor(private bookService: BooksService) { }

  public books: Book[] = new Array<Book>();

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      data => { this.books = data[0] as Array<Book>;
        console.log(data)
      },
      err => console.error(err),
      () => console.log(this.books)
    );
  }

}
