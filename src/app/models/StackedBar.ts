import { draw } from 'patternomaly';

export class StackedBar {
  public label: string;
  public data: Array<number>;
  public backgroundColor: string;
  public borderColor: string;
  public borderWidth: number;

  constructor(label: string, data: Array<number>, backgroundColor: Array<string>, index: number) {
    console.log(backgroundColor
      )
    this.label = label;
    this.data = data;
    // this.backgroundColor = this.getColorsAsPattern(backgroundColor);
    this.backgroundColor = backgroundColor[index];
    this.borderColor = backgroundColor[index];
    this.borderWidth = 1;
  }

  getColorsAsPattern(color: Array<string>): Array<string>{
    return [draw('ring', color[0]), draw('diamond', color[1])];
  }

  getColor(index: number): string {
    return this.backgroundColor[index];
  }

}
