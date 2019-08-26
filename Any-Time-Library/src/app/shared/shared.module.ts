/** Angular Modules */
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Material Modules*/
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from "@angular/material/icon";

/** Flex Layout Module */
import { FlexLayoutModule } from '@angular/flex-layout';



/** Project Imported Modules */
// import { DashboardModule } from '../dashboard/dashboard.module';

/**
 * Shared Module to create all Layouts(Pages) and export them to App Module.
 */
@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: []
})
export class SharedModule { }
