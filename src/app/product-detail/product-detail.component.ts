import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    let productId:number = this.routeInfo.snapshot.params["productId"];
  }

}
