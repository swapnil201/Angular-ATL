import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Book } from 'src/app/shared/models/book.model';

// This component is designed to display details of book and let logged in user to borrow.
// As this a Dialog Display component it needs to be declared in entryComponents[] in module.ts
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  // MAT_DIALOG_DATA is injection token used to access Data passed to Dialog
  constructor(@Inject(MAT_DIALOG_DATA) public book: Book) { }

  ngOnInit() {
  }

}
