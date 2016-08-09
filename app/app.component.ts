import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';
import { TapListComponent } from './tap-list.component';
@Component({
  selector: 'my-app',
  directives: [KegListComponent, TapListComponent],
  // inputs: ['onKegTapped'],
  template: `
    <keg-list (onKegTapped)="tapKegEvent($event)"[kegList]="kegs" ></keg-list>
    <tap-list [tappedKegs]="tappedKegs"></tap-list>
  `
})
export class AppComponent {
  public kegs: Keg[];
  public tappedKegs: Keg[];
  constructor() {
    var newKeg = new Keg("Anchor Steam", "Anchor Brewing", 5, 5);
    var newKeg2 = new Keg("Farmhouse Ale", "Commons Brewery", 4, 6);
    var newKeg3 = new Keg("Devil's Kriek", "Double Mountain", 8, 8);
    newKeg3.tap();
    this.kegs = [newKeg, newKeg2, newKeg3];
    this.tappedKegs = [newKeg3];
  }
  tapKegEvent(keg: Keg) {
    keg.tap();
    this.tappedKegs.push(keg);
  }
}
