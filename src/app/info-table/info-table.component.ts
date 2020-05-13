import { Component, OnInit } from '@angular/core';
import {Product} from '../types/types';
import { Data } from '../mock-data/mock-products';


@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css']
})
export class InfoTableComponent  {
  displayedColumns: string[] = ['item', 'cost'];
  products: Array<Product> = Data;


}
