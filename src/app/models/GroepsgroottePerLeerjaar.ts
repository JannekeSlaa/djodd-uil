export class GroepsgroottePerLeerjaar {
  leerjaar: string;
  onderbouw: number;
  bovenbouw: number;

  getColor(): string {
    console.log(this);
    console.log(this.onderbouw.toString());
    if (this.onderbouw.toString() === '0') {
      console.log('Ik ben bovenbouw ');
      return '#5DB6E2';
    }
    console.log('Ik ben onderbouw');
    return '#F4BF3D';

  }
}
