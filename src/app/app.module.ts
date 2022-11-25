import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShoppingComponent } from './add-shopping/add-shopping.component';
import { ViewShoppingComponent } from './view-shopping/view-shopping.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddShoppingComponent
  },
  {
    path:"view",
    component:ViewShoppingComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddShoppingComponent,
    ViewShoppingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
