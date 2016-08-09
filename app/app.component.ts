import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';
@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <keg-list (onKegTapped)="tapKegEvent($event)"[kegList]="kegs" ></keg-list>
  </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    var newKeg = new Keg("Anchor Steam", "Anchor Brewing", 5, 5);
    var newKeg2 = new Keg("Farmhouse Ale", "Commons Brewery", 4, 6);
    var newKeg3 = new Keg("Devil's Kriek", "Double Mountain", 8, 8);
    newKeg3.tap();
    newKeg3.pintsLeft = 5;
    this.kegs = [newKeg, newKeg2, newKeg3];
  }
}
