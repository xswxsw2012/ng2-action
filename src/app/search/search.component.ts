import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  formModel:FormGroup;

  categories: string[];

  //响应式校验，数据模型
  constructor(private productService:ProductService) { 
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.positiveNumberValidator],
      category: ['-1']
    });
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }

  //校验价格
  positiveNumberValidator(control: FormControl): any{
    if(!control.value){
      return null;
    }
    let price = parseInt(control.value);

    if(price > 0){
      return null;
    }else{
      return {positiveNumber: true};
    }
  }

  onSearch(){
    if(this.formModel.valid){
      console.log(this.formModel.value);
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }

}
