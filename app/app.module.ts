import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';

import { CoreRoutingModule }   from './core/core-routing.module';
import { LoginRoutingModule }   from './login/login-routing.module';
import { AppRoutingModule }   from './app-routing.module';

import { LoginComponent }   from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreRoutingModule,
    LoginRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}