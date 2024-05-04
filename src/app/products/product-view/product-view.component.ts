import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProductViewService } from './product-view.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit, OnDestroy {

  @Input() id = -1;
  name = '';
  private productSub = new Subject<void>();

  constructor(private prodcutViewService: ProductViewService){}
 
  ngOnInit(): void {
   this.getProductName();
  }

  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }

   private getProductName(){
     this.prodcutViewService.getProduct(this.id).pipe(
        takeUntil(this.productSub)
     ).subscribe(product => {
          if (product) {
            this.name = product.name;
          }
        }
     );
   }
}
