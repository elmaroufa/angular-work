import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit {
  
  selectedProduct : Product | undefined;
  products: Product[] = [];
  products$ : Observable<Product[]> | undefined;
  // private productSUb : Subscription |undefined ;

  constructor(private productService : ProductsService){
    
  }
  
  ngOnInit(): void {
    this.getProducts();
  }

  // ngOnDestroy(): void {
  //   this.productSUb?.unsubscribe();
  // }
  
  private getProducts(){
    this.products$ = this.productService.getProducts();
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
