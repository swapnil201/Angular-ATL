/** Angular Modules */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Material Modules*/
import { MatTabsModule } from '@angular/material';

/** Flex Layout Module */
import { FlexLayoutModule } from '@angular/flex-layout';

/** Project Imported Modules */
import { BooksModule } from '../books/books.module';

/** Module Components */
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

/**
 * Dashboard Module to create content of dashboard pages and export them to Common Module.
 */
@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    MatTabsModule,
    FormsModule,
    FlexLayoutModule,
    BooksModule
  ],
  exports: [
    UserDashboardComponent
  ]
})
export class DashboardModule { }
