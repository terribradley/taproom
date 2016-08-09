import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { EditKegComponent } from './edit-keg.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [EditKegComponent],
  template: `
  <div [class.almost-empty]="keg.pintsLeft <= 10 && keg.pintsLeft > 0" class="keg">
    <h3>{{keg.brand}}</h3><h3>{{keg.name}}</h3>
    <h4 *ngIf="keg.pintsLeft <= 10 && keg.pintsLeft > 0">WARNING: This keg is almost empty</h4>
    <h4><span
      [class.high-abv]="keg.alchoholByVolume > 6"
      [class.low-abv]="keg.alchoholByVolume <= 6">
      ABV: {{keg.alchoholByVolume}}</span>
     - <span
      [class.cheap] ="keg.price <=3"
      [class.expensive]="keg.price >3">
      Price per Pint: \${{keg.price}}</span></h4>
    <div *ngIf="keg.pintsLeft > 0">
      <h4 *ngIf="keg.isTapped">Number of Pints Left: {{keg.pintsLeft}}</h4>
      <button *ngIf="!keg.isTapped" (click)="tapKeg()">Tap it!</button>
      <button *ngIf="keg.isTapped" (click)="pourPint()">Pour Pint</button>
      <button *ngIf="!beingEdited" (click)="toggleEditKeg()">Edit</button>
      <button *ngIf="beingEdited" (click)="toggleEditKeg()">Done</button>
      <edit-keg *ngIf="beingEdited" [keg]="keg"></edit-keg>
    </div>
  </div>
  `
})
export class KegDisplayComponent {
  public keg: Keg;
  public beingEdited: boolean = false;
  tapKeg() {
    this.keg.tap();
  };
  pourPint() {
    this.keg.pintsLeft--;
  }
  toggleEditKeg() {
    this.beingEdited = (!this.beingEdited);
  }
}
