/** Angular Modules */
import { NgModule } from '@angular/core';

/** Material Modules*/
import { MatCardModule, MatButtonModule, MatDividerModule } from '@angular/material';

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
    FlexLayoutModule
  ],
  exports: [
    UserDashboardComponent
  ]
})
export class DashboardModule { }
