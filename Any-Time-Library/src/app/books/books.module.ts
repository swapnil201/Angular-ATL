/** Angular Modules */
import { NgModule } from '@angular/core';

/** Project Imported Modules */
import { DashboardModule } from '../dashboard/dashboard.module';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';

@NgModule({
  declarations: [
    BookDetailsComponent,
    BrowseBooksComponent
  ],
  imports: [
    DashboardModule
  ]
})
export class BooksModule { }
