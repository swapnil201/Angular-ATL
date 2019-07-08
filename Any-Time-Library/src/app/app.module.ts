/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Material Modules */
import { MatToolbarModule } from '@angular/material';

/** Module Components */
import { AppComponent } from './app.component';

/** Project Imported Modules */
import { CommonModule } from './common/common.module';
import { BookComponent } from './books/book/book.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
