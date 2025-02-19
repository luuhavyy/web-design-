import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Ex88Component } from './ex88/ex88.component';
import { Ex88serviceComponent } from './ex88service-details/ex88service.component';
import { Ex89Component } from './ex89/ex89.component';
import { Ex90ServiceProductHttpComponent } from './ex90-service-product-http/ex90-service-product-http.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Ex88Component,
    Ex88serviceComponent,
    Ex89Component,
    Ex90ServiceProductHttpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
