import { Injectable } from '@angular/core';
import { CProduct, Ouser } from '../models/models';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CProduct[] = [];
  user: Ouser = {
    name: '',
    address: '',
    ccn: '',
  };
  constructor() {}
  setUser(name: string, address: string, ccn: string) {
    this.user.name = name;
    this.user.address = address;
    this.user.ccn = ccn;
  }
  getUser() {
    return { name: this.user.name, address: this.user.address };
  }
  addToCart(Pd: CProduct): boolean {
    const a = this.cart.filter((p) => p.id == Pd.id);
    console.log(a);
    if (!a[0]) {
      if (this.cart.unshift(Pd)) {
        return true;
      }
    }

    return false;
  }
  getCProducts(): CProduct[] {
    return this.cart;
  }
  getSum() {
    var sum: number = 0;
    this.cart.forEach((n) => (sum += n.amount * n.price));
    return sum;
  }
  updateAmount(id: number, amount: number) {
    this.cart.filter((p) => p.id == id)[0].amount = amount;
    return this.cart;
  }
  dropP(id: number) {
    this.cart = this.cart.filter((p) => p.id != id);
  }
}
