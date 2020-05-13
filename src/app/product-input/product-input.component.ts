import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../types/types';
import { DataService } from '../injectables/data';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.css'],
  providers: [DataService]
})

export class ProductInputComponent implements  OnChanges {
  id: number;
  name: string;
  type: string;
  product: Product;
  dataService: any;
  @Output() FormSubmitted: EventEmitter<Array<Product>> = new EventEmitter();


    constructor(dataService: DataService) {
    this.product = {name: this.name, id: this.id, type: this.type};
    this.id = null;
    this.name = '';
    this.type = '';
    this.dataService = dataService;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onSubmit(e: any){
    e.preventDefault();
    const { product } = this;
    product.id = this.id;
    product.name = this.name;
    product.type = this.type;
    this.dataService.setOption(this.dataService.getOption().length++, product);
    this.FormSubmitted.emit(this.dataService.getOption());

  }

  onChangeName(e: any){
    this.name += e.target.value;
  }
  onChangeType(e: any){
    this.type += e.target.value;
  }
  onChangeId(e: any){
    // tslint:disable-next-line:radix
    this.id = parseInt(e.target.value);
  }
}
