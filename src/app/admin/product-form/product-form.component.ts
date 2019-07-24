import { Router } from '@angular/router';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router
  ) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {}

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
