import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import { Chart } from 'chart.js';
import {VerzuimService} from '../services/verzuim/verzuim.service';
import {StackedBar} from '../models/StackedBar';
import {VerzuimPerStatus} from '../models/VerzuimPerStatus';

@Component({
  selector: 'app-verzuim-per-status',
  templateUrl: './verzuim-per-status.component.html',
  styleUrls: ['./verzuim-per-status.component.css']
})
export class VerzuimPerStatusComponent implements OnInit {
  chart = [];

  @Input() canvasId: any;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;
  @Input() stacked: boolean;

  constructor(private verzuimService: VerzuimService) {

  }

  ngOnInit() {
    this.createStackedChart();
  }

  createStackedChart() {
    const list: Array<VerzuimPerStatus> = this.verzuimService.getVerzuimPerStatus();
    this.canvas.nativeElement.id = this.canvasId;
    const bar1 = this.getStackedBar('Relatief verzuim', list, 0);
    const bar2 = this.getStackedBar('Luxeverzuim', list, 1);
    const bar3 = this.getStackedBar('Overig', list, 2);
    const bar4 = this.getStackedBar('16U / 4wkn', list, 3);
    const bars = [bar1, bar2, bar3, bar4];
    this.chart = new Chart(this.canvasId, {
      type: 'bar',
      data: {
          labels: ['Afgesloten', 'Geregistreerd', 'In behandeling'],
          datasets: [
          {
            label: bar1.label,
            data: this.retrieveStackedData(list, 0),
            backgroundColor: bar1.getColor(0),
            borderColor: bar1.getColor(0),
            borderWidth: bar1.borderWidth
          },
          {
            label: bar2.label,
            data: this.retrieveStackedData(list, 1),
            backgroundColor: bar2.getColor(1),
            borderColor: bar2.getColor(1),
            borderWidth: bar2.borderWidth
          },
          {
            label: bar3.label,
            data: this.retrieveStackedData(list, 2),
            backgroundColor: bar3.getColor(2),
            borderColor: bar3.getColor(2),
            borderWidth: bar3.borderWidth
          },
          {
            label: bar4.label,
            data: this.retrieveStackedData(list, 3),
            backgroundColor: bar4.getColor(3),
            borderColor: bar4.getColor(3),
            borderWidth: bar4.borderWidth
          }
        ]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  },
                  stacked: true
              }],
            xAxes: [{ stacked: true }],
          }
      }
    });
  }


  getStackedBar(barLabel: string, list: Array<VerzuimPerStatus>, index: number): StackedBar {
    return new StackedBar(barLabel, this.retrieveStackedData(list, index), ['#F28F49', '#EBCF46', '#41D99A', '#5AACFF']);
  }

  retrieveStackedData(list: Array<VerzuimPerStatus>, index: number): Array<number> {
    const dataArray = [];
    list.forEach((element: VerzuimPerStatus) => {
      dataArray.push(element.getData()[index]);
    });
    return dataArray;
  }

}


