import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import {StackedBar} from '../models/StackedBar';
import {draw} from 'patternomaly'

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  chart = [];

  @Input() canvasId: any;
  @Input() labels: Array<string>;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;
  @Input() bars: Array<StackedBar>;

  constructor() { }

  ngOnInit() {
    this.createBarchart();
  }

  createBarchart() {
    this.canvas.nativeElement.id = this.canvasId;
    this.chart = new Chart(this.canvasId, {
      type: this.getType(),
      data: this.getData(),
      options: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            },
            stacked: true
          }],
          yAxes: [{stacked: false}],
        }
      }
    });
  }

  private getType(): string {
    return 'bar';
  }

  private getData(): Data {
    return new Data(this.labels, this.bars);
  }

}

export class Data {
  labels: Array<string> = [];
  datasets: Array<StackedBar>;

  constructor(labels: Array<string>, datasets: Array<StackedBar>) {
    this.labels = labels;
    this.datasets = datasets;
  }
}
