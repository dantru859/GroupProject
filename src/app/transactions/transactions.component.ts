import {Component, OnInit} from '@angular/core';
import {getTrainers} from '../operations/CRUD-operations';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'brand', 'title', 'retailPrice'];
  transactions: any[] = [
  {name: 'Core Black White', brand: 'adidas', title: 'adidas Yeezy Boost 350 V2 Black White', retailPrice: '220'},
  {name: 'Core Black Copper', brand: 'adidas', title: 'adidas Yeezy Boost 350 V2 Black Copper', retailPrice: '220'},
  {name: 'Tail Light', brand: 'adidas', title: 'adidas Yeezy Boost 350 V2 Tail Light', retailPrice: '220'},
  {name: 'Butter', brand: 'adidas', title: 'adidas Yeezy Boost 350 V2 Butter', retailPrice: '220'},
  {name: 'Glow', brand: 'adidas', title: '"adidas Yeezy Boost 350 V2 Earth"', retailPrice: '220'}

];
  // constructor() {
  //   this.transactions = [];
  // }
  //
  async ngOnInit() {
  }
  //
  // async getData() {
  //   await getTrainers().then((product: any[]) => product.map((pro: any) => {
  //     this.transactions.push({item: pro.name, cost: pro.minimumBid});
  //   }));
  // }
}
