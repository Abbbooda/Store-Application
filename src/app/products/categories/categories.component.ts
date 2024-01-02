import { EventEmitter, inject } from '@angular/core';
import { Component, ElementRef, ViewChild, Output } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

    productService : ProductService = inject(ProductService)
    categories : string[] = [];

    @ViewChild('categoryTemp') categorySelected : ElementRef

    @Output()
    onCategoryChanges : EventEmitter<string> = new EventEmitter<string>()

    ngOnInit(){
      this.productService.getAllCategories()
      .subscribe((catgs)=>{
        this.categories = catgs
      })
    }

    onChangeSelect(){
      this.onCategoryChanges.emit(this.categorySelected.nativeElement.value)    
    }

}
