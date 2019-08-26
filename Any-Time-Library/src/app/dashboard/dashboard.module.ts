/** Angular Modules */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Material Modules*/
import { MatTabsModule, MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from "@angular/material/icon";

/** Flex Layout Module */
import { FlexLayoutModule } from '@angular/flex-layout';

/** Project Imported Modules */
import { BooksModule } from '../books/books.module';

/** Module Components */
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FooterComponent } from '../dashboard/footer/footer.component';
import { HeaderComponent } from '../dashboard/header/header.component';
import { LayoutComponent } from '../dashboard/layout/layout.component';

/**
 * Dashboard Module to create content of dashboard pages and export them to Common Module.
 */
@NgModule({
  declarations: [
    UserDashboardComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent],
  imports: [
    MatTabsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    BooksModule
  ],
  exports: [
    UserDashboardComponent,
    LayoutComponent
  ]
})
export class DashboardModule { }
