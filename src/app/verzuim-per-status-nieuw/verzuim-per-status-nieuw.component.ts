import { Component, OnInit } from '@angular/core';
import {StackedBar} from '../models/StackedBar';
import { VerzuimPerStatus } from '../models/VerzuimPerStatus';
import { VerzuimService } from '../services/verzuim/verzuim.service';

@Component({
  selector: 'app-verzuim-per-status-nieuw',
  templateUrl: './verzuim-per-status-nieuw.component.html',
  styleUrls: ['./verzuim-per-status-nieuw.component.css']
})
export class VerzuimPerStatusNieuwComponent implements OnInit {

  verzuimPerStatusList: Array<VerzuimPerStatus>;
  labels: Array<string> = [];
  bars: Array<StackedBar> = [];

  constructor(private service: VerzuimService) { }

  ngOnInit() {
    this.verzuimPerStatusList = this.service.getVerzuimPerStatus();
    this.map();
  }

  map(): void {
    const relatiefVerzuim = [];
    const luxeVerzuim = [];
    const overig = [];
    const zestienUurVierWeken = [];
    let colors = [];

    this.verzuimPerStatusList.forEach(element => {
      this.labels.push(element.label);
      relatiefVerzuim.push(element.aantal_v3);
      luxeVerzuim.push(element.aantal_l);
      overig.push(element.aantal_0);
      zestienUurVierWeken.push(element.aantal_lrv);
      colors = element.colors;
    });

    this.bars.push(new StackedBar('Relatief verzuim', relatiefVerzuim, colors, 0),
                   new StackedBar('Luxeverzuim', luxeVerzuim, colors, 1),
                   new StackedBar('Overig', overig, colors, 2),
                   new StackedBar('16U / 4wkn', zestienUurVierWeken, colors, 3)
                   );
  }

  getCanvasId() {
    return 'verzuimPer';
  }

  getBars(): Array<StackedBar> {
    return this.bars;
  }

  getLabels() {
    return this.labels;
  }

}
