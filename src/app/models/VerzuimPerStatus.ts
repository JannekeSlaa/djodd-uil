export class VerzuimPerStatus {
  public label: string;
  public aantal_l: number;
  public aantal_lrv: number;
  public aantal_0: number;
  public aantal_v3: number;

  getData(): Array<number> {
    return [this.aantal_l, this.aantal_lrv, this.aantal_0, this.aantal_v3];
  }

}
