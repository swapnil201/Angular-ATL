import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

/** Material Modules*/
import { MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import {MatInputModule } from '@angular/material';

//** Firebase modules */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

//** Module components */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers:[AuthService],
  exports: [LoginComponent]
})
export class AuthModule { }
