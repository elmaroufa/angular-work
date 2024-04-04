import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit, OnChanges{
  
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();

  constructor(){
   console.log(`Name is ${this.name} in the constructor`)
  }
  
  ngOnInit(): void {
    console.log(`Name is ${this.name} in the NgOnInit `)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    if (!product.isFirstChange()){
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }


  buy(){
    this.bought.emit(this.name);
  }


}
