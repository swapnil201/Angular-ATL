/** Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Material Modules */
import { MatToolbarModule } from '@angular/material';

/** Module Components */
import { AppComponent } from './app.component';

/** Project Imported Modules */
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';

//** Firebase modules */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    MatToolbarModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,// imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
