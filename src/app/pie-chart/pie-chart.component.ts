import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Data } from '../mock-data/mock-products';
import {Product} from '../types/types';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  data: Product[];
  Labels = [];
  Data = [];
  chart = [];
  constructor() { }

  ngOnInit(): void {
    Data.forEach((product: Product) => {
      this.Labels.push(product.name);
      this.Data.push(product.id);
    });
    this.chart = new Chart('pie', {
      type: 'pie',
      data: {
        labels: this.Labels,
        datasets: [
          {
            data: this.Data,
            borderColor: '#3cba9f',
            backgroundColor: [
              '#3cb371',
              '#0000FF',
              '#9966FF',
              '#4C4CFF',
              '#00FFFF',
              '#f990a7',
              '#aad2ed',
              '#FF00FF',
              'Blue',
              'Red',
              'Blue'
            ],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
