import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  products = [
    {title: 'DSLR Camera', price: 1499.99},
    {title: 'iLaptop', price: 1299.99}
  ];

  constructor() { }

  retrieveProducts() {
    return this.products;
  }

  deleteProduct(i) {
    this.products.splice(i, 1);    
  }

  addProduct(product) {
    this.products.push(product);
  }

  editProduct(i, product) {
    this.products[i].title = product.title;
    this.products[i].price = product.price;
  }

}
