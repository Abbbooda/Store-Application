import { Injectable } from "@angular/core";
import { Cart, CartItem } from "../Models/cart";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn : 'root'
})


export class CartService{

    cart  = new BehaviorSubject<Cart>({items : []})

    AddToCart(cartItem : CartItem){
        
        const items = [...this.cart.value.items]
        
        const item = items.find((item)=>{
             return item.id == cartItem.id
        })
        if(item){
            alert('you added already this item')
        } else{
            items.push(cartItem)
            this.cart.next({items : items})
        }
    }

    clearCart(){
        this.cart.next({items : []})
    }

    getTotal(cartItems : Array<CartItem>){
        return cartItems
        .map((item)=>{
             return item.price * item.quantity
        })
        .reduce((prev,curr)=>{
            return prev + curr
        },0) 
    }

}