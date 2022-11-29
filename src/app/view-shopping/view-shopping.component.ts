import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-shopping',
  templateUrl: './view-shopping.component.html',
  styleUrls: ['./view-shopping.component.css']
})
export class ViewShoppingComponent {

  constructor(private api:ApiService)
  {
    api.fetchProduct().subscribe(
      (response)=>{
        this.shopping=response;
      }
    )
  }



  shopping:any=[]

}
