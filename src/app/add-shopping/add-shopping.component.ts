import { Component } from '@angular/core';

@Component({
  selector: 'app-add-shopping',
  templateUrl: './add-shopping.component.html',
  styleUrls: ['./add-shopping.component.css']
})
export class AddShoppingComponent {

  title=""
  description=""
  image=""
  price=""
  sellerName=""
  quantity=""



  readValues=()=>
  {
    let data:any={"title":this.title,"price":this.price,"description":this.description,"image":this.image,"sellerName":this.sellerName,"quantity":this.quantity}
    console.log(data)
  
  }
  }










