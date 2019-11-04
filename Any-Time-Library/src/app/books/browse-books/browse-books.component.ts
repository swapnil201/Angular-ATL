import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/books.service';
import { Book } from '../../shared/models/book.model';
import { MatDialog } from '@angular/material';
import { BookDetailsComponent } from './book-details/book-details.component';

// This Component is to get Books Data from book service, show on dashboard and Open Dialog to show details of book.
@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.scss'],
  providers: [BooksService]
})
export class BrowseBooksComponent implements OnInit {

  constructor(private bookService: BooksService, public detailsDialog: MatDialog) { }

  public books: Book[] = new Array<Book>();

  ngOnInit() {
    this.getBooks();
  }

  // Mat Dialog provides built in Material Dialog Class and its Funtions to trigger and handle different 
  // Events related to Dialog.
  // Method MatDialog.open has first param as Component to be displayed and second(optional) param is Configuration
  // where we are passing 'data config' or 'data options'
  openDetailsDialog(i: number) {
    this.detailsDialog.open(BookDetailsComponent, {data: this.books[i], width: "55%"});
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      data => { this.books = data[0] as Array<Book>;},
      err => console.error(err),
      () => console.log()
    );
  }

}
