import { Component, OnInit, inject } from '@angular/core';
import { Cart, CartItem } from '../Models/cart';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems : Array<CartItem>
  cartService : CartService = inject(CartService)

  ngOnInit(){
    this.cartService.cart.subscribe((data)=>{
      this.cartItems = data.items
    })
  }

  onClearCart(){
    this.cartService.clearCart()
  }

  addQuantity(cartItem : CartItem){
    cartItem.quantity = cartItem.quantity + 1
  }

  removeQuantity(cartItem : CartItem){
    cartItem.quantity = cartItem.quantity - 1
  }

  deleteItem(cartItem : CartItem){
    let indexRemoved = this.cartItems.indexOf(cartItem)
    this.cartItems.splice(indexRemoved,1)
    
  }

  getTotal(cartItems : Array<CartItem>) : number{
    return this.cartService.getTotal(cartItems)
  }

}
