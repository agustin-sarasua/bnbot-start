import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatCardModule } from '@angular/material/card';
import { BusinessProfileComponent } from './business-profile/business-profile.component';

import { ReactiveFormsModule } from '@angular/forms'; 
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    BusinessProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    MatCardModule,
    SidenavComponent,
    AddressComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-szxtl072nd0t8rsr.us.auth0.com',
      clientId: 'OefFo3k4jpnrEvQU9O8DHTNCxtF1ZAeV',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
