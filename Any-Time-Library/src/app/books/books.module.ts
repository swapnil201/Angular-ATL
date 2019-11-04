/** Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/** Material Modules*/
import { MatCardModule, MatButtonModule, MatDividerModule } from '@angular/material';
import {MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

/** Flex Layout Module */
import { FlexLayoutModule } from '@angular/flex-layout';

/** Module Components */
import { BookDetailsComponent } from './browse-books/book-details/book-details.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';

/** Project Imported Modules */
import { SharedModule } from '../shared/shared.module';

/** Routing module */
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  declarations: [
    BookDetailsComponent,
    BrowseBooksComponent
  ],
  entryComponents: [BookDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    ScrollingModule,
    SharedModule,
    BooksRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    BrowseBooksComponent
  ]
})
export class BooksModule { }
