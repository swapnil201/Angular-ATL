import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CommonModule { }
