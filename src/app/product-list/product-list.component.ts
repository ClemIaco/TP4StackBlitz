import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import {ApiService} from '../services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: Observable<Product[]>;

  constructor() { }

}
