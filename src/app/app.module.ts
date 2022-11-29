import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShoppingComponent } from './add-shopping/add-shopping.component';
import { ViewShoppingComponent } from './view-shopping/view-shopping.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ViewNewsComponent } from './view-news/view-news.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddShoppingComponent
  },
  {
    path:"view",
    component:ViewShoppingComponent
  },
  {
    path:"news",
    component:ViewNewsComponent
  }
  

]

@NgModule({
  declarations: [
    AppComponent,
    AddShoppingComponent,
    ViewShoppingComponent,
    NavbarComponent,
    ViewNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
