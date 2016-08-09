import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegTapped'],
  template: `
  <h1>Keg List:</h1>
  <div *ngFor="#keg of kegList">
    <h3>{{keg.brand}} - {{keg.name}}</h3>
    <h4>ABV: {{keg.alchoholByVolume}} Price: {{keg.price}}</h4>
    <button *ngIf="!keg.isTapped" (click) = "tapKeg(keg)">Tap it!</button>
    <button *ngIf ="keg.isTapped">It's already Tapped!</button>
  </div>
  `
})
export class KegListComponent {
  public onKegTapped: EventEmitter<Keg>;
  constructor() {
    this.onKegTapped = new EventEmitter();
  }
  tapKeg(keg: Keg){
    console.log(keg);
    this.onKegTapped.emit(keg);
  };

}
