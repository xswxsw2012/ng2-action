import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private imgUrl = "http://placehold.it/320x150";
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    
  }

}

