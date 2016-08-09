import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <h3>{{keg.brand}} - {{keg.name}}</h3>
    <h4>ABV: {{keg.alchoholByVolume}} - Price: {{keg.price}}</h4>
    <h4 *ngIf="keg.isTapped">Number of Pints Left: {{keg.pintsLeft}}</h4>
    <button *ngIf="!keg.isTapped" >Tap it!</button>
    <button *ngIf ="keg.isTapped">It's already Tapped!</button>
  </div>
  `
})
export class KegDisplayComponent {
  public keg: Keg;
  // public onKegTapped: EventEmitter<Keg>;
  // constructor() {
  //   this.onKegTapped = new EventEmitter();
  // }
  // tapKeg(){
  //   console.log(this.keg);
  //   this.onKegTapped.emit(this.keg);
  // };


  // (click) = "tapKeg(keg)"
}
