export class StackedBar {
  public label: string;
  public data: Array<number>;
  public backgroundColor: Array<string>;
  public borderColor: Array<string>;
  public borderWidth: number;

  constructor(label: string, data: Array<number>, backgroundColor: Array<string>) {
    this.label = label;
    this.data = data;
    this.backgroundColor = backgroundColor;
    this.borderColor = backgroundColor;
    this.borderWidth = 1;
  }

  getColor(index: number) {
    return this.backgroundColor[index];
  }

}
