import { EventEmitter } from '@angular/core';
import { Component, ElementRef, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
    categories : string[] = ['all','shoes','pens'];

    @ViewChild('categoryTemp') categorySelected : ElementRef

    @Output()
    onCategoryChanges : EventEmitter<string> = new EventEmitter<string>()


    onChangeSelect(){
      this.onCategoryChanges.emit(this.categorySelected.nativeElement.value)    
    }

}
