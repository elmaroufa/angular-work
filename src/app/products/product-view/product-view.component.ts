import { Component, Input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit {

  @Input() id = -1;
  name = '';
  
  constructor(private prodcutViewService: ProductViewService){}

  ngOnInit(): void {
    const product = this.prodcutViewService.getProduct(this.id);
    if (product) {
      this.name = product.name;
    }
  }

}
