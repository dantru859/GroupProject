import { Component } from '@angular/core';

@Component({
  selector: 'app-fee-calculator',
  templateUrl: './fee-calculator.component.html',
  styleUrls: ['./fee-calculator.component.css']
})
export class FeeCalculatorComponent {
  overseas = 'no';
  topRated = 'no';
  fee = 10;
  soldPrice: number;
  shippingCost: number;
  itemCost: number;
  shippingCharge: number;

  constructor() {
    this.soldPrice = null;
    this.shippingCost = null;
    this.itemCost = null;
    this.shippingCharge = null;
  }

  getSoldPrice(e: any){
  this.soldPrice = parseInt(e.target.value, 10);
  }
  getShippingCost(e: any){
    this.shippingCost = parseInt(e.target.value, 10);

  }
  getItemCost(e: any){
    this.itemCost = parseInt(e.target.value, 10);

  }
  getShippingCharge(e: any){
    this.shippingCharge = parseInt(e.target.value, 10);

  }

  getProfit(){
    const cost = (this.shippingCost + this.soldPrice) - (this.shippingCharge + this.itemCost);
    const feeTaken = cost / this.fee;
    const topSellerFee = cost / this.getTopRatedSeller();
    const overseasFee = cost / this.getOverseas();

    const profit = cost - (feeTaken + topSellerFee + overseasFee);
    return profit.toFixed(2);
  }

  getTopRatedSeller(){
    if ( this.topRated === 'yes'){
      return 5;
    }
    return 1;
  }

  getOverseas(){
    if (this.overseas === 'yes'){
      return 5;
    }
    return 1;
  }
}
