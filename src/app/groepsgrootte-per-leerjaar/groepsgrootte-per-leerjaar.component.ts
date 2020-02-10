import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {StackedBar} from '../models/StackedBar';
import {GroepsgrootteService} from '../services/groepsgrootte/groepsgrootte.service';
import {GroepsgroottePerLeerjaar} from '../models/GroepsgroottePerLeerjaar';

@Component({
  selector: 'app-groepsgrootte-per-leerjaar',
  templateUrl: './groepsgrootte-per-leerjaar.component.html',
  styleUrls: ['./groepsgrootte-per-leerjaar.component.css']
})
export class GroepsgroottePerLeerjaarComponent implements OnInit {
  groepsgrootteList: Array<GroepsgroottePerLeerjaar>;
  labels: Array<string> = [];
  bars: Array<StackedBar> = [];
  constructor(private service: GroepsgrootteService) { }

  ngOnInit() {
    this.groepsgrootteList = this.service.getGroepsgrootte();
    this.map();
  }

  map(): void {
    const onderbouw = [];
    const bovenbouw = [];
    const colors = [];

    this.groepsgrootteList.forEach(element => {
      this.labels.push(element.leerjaar);
      onderbouw.push(element.onderbouw);
      bovenbouw.push(element.bovenbouw);
      colors.push(element.getColor());
    });
    this.bars.push(new StackedBar('Onderbouw', onderbouw, colors, 0), 
                   new StackedBar('Bovenbouw', bovenbouw, colors, 1)
                   );
  }

  getCanvasId() {
    return 'groepsgroottePerLeerjaar';
  }

  getBars(): Array<StackedBar> {
    return this.bars;
  }

  getLabels() {
    return this.labels;
  }
}
