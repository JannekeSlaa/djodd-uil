export class GroepsgroottePerLeerjaar {
  leerjaar: string;
  onderbouw: number;
  bovenbouw: number;

  getColor(): string {
    if (this.onderbouw.toString() === '0') {
      return '#5DB6E2';
    }
    return '#F4BF3D';
  }
}
