import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/models';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  amount: string = '';
  id: number = 0;
  //@ts-ignore
  product: Product = {};
  constructor(
    private route: ActivatedRoute,
    private pd: ProductsService,
    private cart: CartService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((res) => (this.id = res['id']));
    this.pd.getComments().subscribe((res) => {
      this.product = res.filter((p) => this.id == p.id)[0];
      console.log(this.product);
    });
  }
  addToCart() {
    if (this.amount != '')
      this.cart.addToCart({ ...this.product, amount: Number(this.amount) }) &&
        alert(`${this.product.name} is added to the cart`);
  }
}
