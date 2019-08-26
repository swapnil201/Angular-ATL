/** Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/** Material Modules*/
import { MatCardModule, MatButtonModule, MatDividerModule, MatInputModule, MatIconModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

/** Flex Layout Module */
import { FlexLayoutModule } from '@angular/flex-layout';

/** Module Components */
import { BookDetailsComponent } from './book-details/book-details.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BookDetailsComponent,
    BrowseBooksComponent
  ],
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
    SharedModule
  ],
  exports: [
    BrowseBooksComponent
  ]
})
export class BooksModule { }
