import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private cartService : CartService){

  }

  @Input() product : Product

  cartButtonOn : boolean = true

  quantity : number = 0

  onAddCart(){
    this.cartButtonOn = false
  }

 
  onAddToCart(product : Product){
    this.cartService.AddToCart({
      id : product.id,
      title : product.title,
      price : product.price,
      description : product.description,
      category : product.category,
      image : product.image,
      quantity : this.quantity

    })
    this.cartButtonOn = true
  }



}
