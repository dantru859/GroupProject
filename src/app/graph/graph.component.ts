import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {Character, Product} from '../types/types';
import { DataService } from '../injectables/data';
import {getData, getTrainers} from '../operations/CRUD-operations';

@Component({
  selector: 'app-graph',
  template: `
    <div>
      <canvas id="graph" ></canvas>
      <app-product-input (FormSubmitted)="doSomething($event)" ></app-product-input>
    </div>
  `,
  styleUrls: ['./graph.component.css'],
  providers: [DataService]

})
export class GraphComponent implements OnInit {
  data: Product[];
  Player = [];
  Run = [];
  barChart = [];

  constructor(dataService: DataService) {
    console.log(this.data);
    this.data = dataService.getOption();
  }

   async ngOnInit() {
    await getData().then((arr: Character[]) => arr.forEach((character: Character) => {
      this.Player.push(character.air_date);
      this.Run.push(character.characters.length);
    }));
    this.barChart = new Chart('graph', {
      type: 'line',
      data: {
        labels: this.Player,
        datasets: [
          {
            data: this.Run,
            borderColor: '#3cba9f',
            backgroundColor: [
              '#3cb371',
              '#0000FF',
              '#9966FF',
              '#4C4CFF',
              '#00FFFF',
              '#f990a7',
              '#aad2ed',
              '#FF00FF'
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
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  public doSomething(e: any): void {
    this.data = e;
    console.log(this.data);
  }
}
//
// transactions: any[] = [];
//
//
// ngOnInit() {
//   getTrainers()
//     .then( trainer => trainer.Products)
//     .then( result => this.transactions.push(result));
//   console.log(this.transactions);
// }
