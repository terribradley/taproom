export class Keg {
  public pintsLeft = 124;
  public isTapped: boolean = false;
  constructor(public name: string, public brand: string, public alchoholByVolume: number, public price: number) {}
  tap() {
    this.isTapped = true;
  }
}
