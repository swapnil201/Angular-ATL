import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CommonModule { }
