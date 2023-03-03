import { Component } from '@angular/core';
import { CProduct } from 'src/app/models/models';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  cproducts: CProduct[] = [];
  sum: number = 0;
  constructor(protected cart: CartService) {}
  ngOnInit(): void {
    this.cproducts = this.cart.getCProducts();
    this.sum = this.cart.getSum();
  }
  drop(id: any) {
    if (confirm('are you sure you want to drop this?')) {
      this.cproducts = this.cproducts.filter((p) => p.id != id);
      this.cart.dropP(id);
      this.sum = this.cart.getSum();
    }
  }
  summer($event: any) {
    this.cart.updateAmount($event.id, $event.amount);
    this.sum = this.cart.getSum();
  }
}
