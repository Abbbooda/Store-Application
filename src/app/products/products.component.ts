import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../Models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductService){
    
  }

  category : string
  products : Product[]

  onFetchProducts(){
    this.productService
    .getAllProducts().subscribe((data)=>{
      this.products = data
    })
  }

  

  ngOnInit(){
    this.onFetchProducts() 
  }

  getCategory(value : any){
    this.category = value
    this.fetchProductsById(this.category)
  }

  fetchProductsById(cate : string){
    this.productService.getProductsByCategory(cate).
    subscribe((prods)=>{
      this.products = prods
    })
  }

 

}
