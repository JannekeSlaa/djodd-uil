import { Component, OnInit } from '@angular/core';
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
  legenda: Array<string> = [];
  bars: Array<StackedBar> = [];

  constructor(private service: GroepsgrootteService) { }

  ngOnInit() {
    this.groepsgrootteList = this.service.getGroepsgrootte();
    this.map();
  }

  map(): void {
    this.legenda = [];
    const onderbouw = [];
    const bovenbouw = [];
    const colors = ['#5DB6E2', '#F4BF3D'];
    this.groepsgrootteList.forEach(element => {
      this.legenda.push(element.leerjaar);
      onderbouw.push(element.onderbouw);
      bovenbouw.push(element.bovenbouw);
      // colors.push(element.getColor());
    });

    this.bars.push(new StackedBar('Onderbouw', onderbouw, colors), new StackedBar('Bovenbouw', bovenbouw, colors));
  }

  getCanvasId() {
    return 'groepsgroottePerLeerjaar';
  }

  getBars(): Array<StackedBar> {
    return this.bars;
  }

  getLegenda() {
    return this.legenda;
  }
}
