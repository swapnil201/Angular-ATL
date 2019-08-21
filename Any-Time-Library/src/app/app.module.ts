/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

/** Material Modules */
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
    FormsModule,
    CommonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
