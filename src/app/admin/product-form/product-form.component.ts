import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();

    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productService
        .get(id)
        .pipe(take(1))
        .subscribe(p => (this.product = p));
    }
  }

  ngOnInit() {}

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
