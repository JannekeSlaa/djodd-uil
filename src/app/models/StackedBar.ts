export class StackedBar {
  public label: string;
  public data: Array<number>;
  public backgroundColor: string;
  public borderColor: string;
  public borderWidth: number;

  constructor(label: string, data: Array<number>, backgroundColor: Array<string>, index: number) {

    this.label = label;
    this.data = data;
    this.backgroundColor = backgroundColor[index];
    this.borderColor = backgroundColor[index];
    this.borderWidth = 1;
  }

  getColor(index: number): string {
    return this.backgroundColor[index];
  }
}
