import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/models';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  amount: string = '';
  //@ts-ignore
  @Input() product: Product;
  constructor(private cart: CartService) {}
  addToCart() {
    if (this.amount != '')
      this.cart.addToCart({ ...this.product, amount: Number(this.amount) }) &&
        alert(`${this.product.name} is added to the cart`);
  }
}
