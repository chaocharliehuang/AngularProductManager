import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from './../product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product;

  constructor(private _productService: ProductService, private _route: ActivatedRoute, private _router: Router) {
    this._route.params.subscribe(params => {
      this.product = this._productService.retrieveProducts()[params.id];
      this.product.id = params.id;
    });
  }

  editProduct(i) {
    this._productService.editProduct(i, this.product);
    this._router.navigateByUrl('/products');
  }

  deleteProduct(i) {
    this._productService.deleteProduct(i);
    this._router.navigateByUrl('/products');    
  }

  ngOnInit() {
  }

}
