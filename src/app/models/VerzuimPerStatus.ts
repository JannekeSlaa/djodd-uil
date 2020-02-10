export class VerzuimPerStatus {
  public label: string;
  public aantal_l: number;
  public aantal_lrv: number;
  public aantal_0: number;
  public aantal_v3: number;
  public colors = ['#F28F49', '#EBCF46', '#41D99A', '#5AACFF'];


  getData(): Array<number> {
    return [this.aantal_l, this.aantal_lrv, this.aantal_0, this.aantal_v3];
  }
}
