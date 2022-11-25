import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShoppingComponent } from './add-shopping/add-shopping.component';
import { ViewShoppingComponent } from './view-shopping/view-shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    AddShoppingComponent,
    ViewShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
