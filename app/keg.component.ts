import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div [class.almost-empty]="keg.pintsLeft <= 10">
    <h3>{{keg.brand}} - {{keg.name}}</h3>
    <h4 *ngIf="keg.pintsLeft <= 10">WARNING: This keg is almost empty</h4>
    <h4>ABV: {{keg.alchoholByVolume}} - Price per Pint: \${{keg.price}}</h4>
    <h4 *ngIf="keg.isTapped">Number of Pints Left: {{keg.pintsLeft}}</h4>
    <button *ngIf="!keg.isTapped" (click)="tapKeg()">Tap it!</button>
    <button *ngIf="keg.isTapped" (click)="pourPint()">Pour Pint</button>
  </div>
  `
})
export class KegDisplayComponent {
  public keg: Keg;
  tapKeg() {
    this.keg.tap();
  };
  pourPint() {
    this.keg.pintsLeft--;
  }
}
