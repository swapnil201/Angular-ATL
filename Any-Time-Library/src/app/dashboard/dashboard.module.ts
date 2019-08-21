/** Angular Modules */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Material Modules*/
import { MatCardModule, MatButtonModule, MatDividerModule, MatTabsModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

/** Module Components */
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

/** Flex Layout Module */
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * Dashboard Module to create content of dashboard pages and export them to Common Module.
 */
@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
  ],
  exports: [
    UserDashboardComponent
  ]
})
export class DashboardModule { }
