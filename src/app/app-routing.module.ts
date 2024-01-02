import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  { path : '', component : ProductsComponent},
  { path : 'products', component : ProductsComponent },
  { path : 'products', children : [
    { path : 'product-details', component : ProductDetailsComponent}
  ]
  },
  { path : 'cart', component : CartComponent},
  { path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
