import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Product } from 'src/app/models/models';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  Products: Product[] = [];
  constructor(public pd: ProductsService) {}
  ngOnInit(): void {
    this.pd.getComments().subscribe((res) => (this.Products = res));
  }
}
