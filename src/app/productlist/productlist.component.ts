import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from './../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products;

  constructor(private _productService: ProductService, private _router: Router) {
    this.products = this._productService.retrieveProducts();
  }

  deleteProduct(i) {
    this._productService.deleteProduct(i);
  }

  editProduct(i) {
    this._router.navigateByUrl('/products/edit/' + i);
  }

  ngOnInit() {
  }

}
