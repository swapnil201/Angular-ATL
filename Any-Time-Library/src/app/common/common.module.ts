/** Angular Modules */
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Material Modules*/
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { MatIconModule } from "@angular/material/icon";

/** Flex Layout Module */
import { FlexLayoutModule } from '@angular/flex-layout';

/** Module Components */
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

/** Project Imported Modules */
import { DashboardModule } from '../dashboard/dashboard.module';

/**
 * Common Module to create all Layouts(Pages) and export them to App Module.
 */
@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    DashboardModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CommonModule { }
