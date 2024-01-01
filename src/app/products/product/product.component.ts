import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private cartService : CartService){

  }

  cartButtonOn : boolean = true

  product : Product = {
    id: 1,
    title : 'Snickers',
    price : 120,
    description : 'product description',
    category : 'mens',
    image : 'https://fakeimg.pl/600x400'
  }

  quantity : number
  

  onAddCart(){
    this.cartButtonOn = false
  }

  onAddToCart(){
    this.cartService.AddToCart({
      id : this.product.id,
      title : this.product.title,
      price : this.product.price,
      description : this.product.description,
      category : this.product.category,
      image : this.product.image,
      quantity : this.quantity
    })
    this.cartButtonOn = true
  }



}
