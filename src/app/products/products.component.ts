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
  loadSpinnerMode : boolean = true

  onFetchProducts(){
    this.productService
    .getAllProducts().subscribe((data)=>{
      this.products = data
      this.loadSpinnerMode = false
    })
  }

  

  ngOnInit(){
    this.onFetchProducts() 
  }

  getCategory(value : any){
    this.category = value
    this.products = []
    this.fetchProductsById(this.category)
    this.loadSpinnerMode = true
  }

  fetchProductsById(cate : string){
    this.productService.getProductsByCategory(cate).
    subscribe((prods)=>{
      this.products = prods
      this.loadSpinnerMode = false
    })
  }

 

}
