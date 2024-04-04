import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements AfterViewInit {
  
  selectedProduct = 'Saly Abbo';
  @ViewChild(ProductDetailComponent) productDetail : ProductDetailComponent | undefined;
  onBuy(name : string){
    window.alert(`You just bought ${name}!`);
    console.log(name);
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log("---------------------------------------------------");
      console.log(this.productDetail.name);
      console.log("---------------------------------------------------");
  }
}


}
