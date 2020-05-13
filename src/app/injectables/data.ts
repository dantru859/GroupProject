import { Injectable } from '@angular/core';
import { Data } from '../mock-data/mock-products';

@Injectable()
export class DataService {

  private data = Data;

  setOption(option, value) {
    this.data[option] = value;
  }

  getOption() {
    return this.data;
  }
}
