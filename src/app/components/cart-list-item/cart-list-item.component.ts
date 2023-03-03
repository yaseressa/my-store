import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CProduct, Product } from 'src/app/models/models';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.css'],
})
export class CartListItemComponent {
  @Output() dropper: EventEmitter<number> = new EventEmitter();
  @Output() summer: EventEmitter<{ id: number; amount: number }> =
    new EventEmitter();
  @Input()
  product!: CProduct;

  constructor(protected cart: CartService) {}
  drop(id: number) {
    this.dropper.emit(id);
  }
  changer() {
    if (this.product.amount < 1) {
      this.dropper.emit(this.product.id);
    }
    this.cart.updateAmount(this.product.id, this.product.amount);
    this.summer.emit({ id: this.product.id, amount: this.product.amount });
    console.log(this.cart);
  }
}
