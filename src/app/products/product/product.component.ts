import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  cartButtonOn : boolean = true

  onAddCart(){
    this.cartButtonOn = false
  }

}
