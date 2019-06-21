/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Material Modules*/
import { MatToolbarModule } from '@angular/material';

/** Module Components */
import { AppComponent } from './app.component';

/** Project Imported Modules */
import { CommonModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
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
