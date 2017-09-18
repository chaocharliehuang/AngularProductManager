import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcreation',
  templateUrl: './productcreation.component.html',
  styleUrls: ['./productcreation.component.css']
})
export class ProductcreationComponent implements OnInit {

  product = {
    title: '',
    price: 0
  }

  constructor(private _productService: ProductService, private _router: Router) { }

  addProduct() {
    this._productService.addProduct(this.product);
    this._router.navigateByUrl('/products');
  }

  ngOnInit() {
  }

}
