import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ouser } from 'src/app/models/models';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  cart: number = 0;
  user: Ouser = {
    name: '',
    address: '',
    ccn: '',
  };
  constructor(private cr: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cart = this.cr.getSum();
    this.user = { ...this.cr.getUser(), ccn: 'xxxxxxxxxxxxxxxxxxxxxxx' };
  }
  clicker() {
    this.router.navigate(['/']);
  }
}
