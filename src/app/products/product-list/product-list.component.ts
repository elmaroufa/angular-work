import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements AfterViewInit {
  
  selectedProduct : Product | undefined;
  products: Product[] = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name:  'Microphone',
      price: 200
    },
    {
      name: 'Wireless keyboard',
      price: 85
    }
  ];
  @ViewChild(ProductDetailComponent) productDetail : ProductDetailComponent | undefined;

  onBuy(){
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
    console.log(this.products);
  
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
  }
}


}
