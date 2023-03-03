import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CProduct } from 'src/app/models/models';
import { CartService } from 'src/app/service/cart.service';
type user = {
  name: string;
  address: string;
  credit: string;
};
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userAuth: user = {
    name: '',
    address: '',
    credit: '',
  };
  constructor(protected cart: CartService, private router: Router) {}
  ngOnInit(): void {}
  onsub() {
    this.cart.setUser(
      this.userAuth.name,
      this.userAuth.address,
      this.userAuth.credit
    );
    this.router.navigate(['/confirmed']);
  }
}
