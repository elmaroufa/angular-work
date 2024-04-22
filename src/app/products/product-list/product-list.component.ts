import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit {
  
  selectedProduct : Product | undefined;
  products: Product[] = [];
  

  constructor(private productService : ProductsService){
    
  }
  ngOnInit(): void {
    this.products =  this.productService.getProducts();
  }

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
