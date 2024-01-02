import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http : HttpClient = inject(HttpClient)
  apiURL = 'https://fakestoreapi.com/products'

  getAllProducts(){
    return this.http.get<Array<Product>>(this.apiURL)
  }

  getAllCategories(){
    return this.http.get<Array<string>>(this.apiURL+'/categories')
  }

  getProductsByCategory(cate : string){
    return this.http.get<Array<Product>>
    (`${this.apiURL}/${cate ? 'category/'+cate : ''}`)
  }
}
