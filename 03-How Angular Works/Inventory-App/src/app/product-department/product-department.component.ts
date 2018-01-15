import {
  Component,
  Input
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html'
})
export class ProductDepartmentComponent {
  @Input() product: Product;
}
