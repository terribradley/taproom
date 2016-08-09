import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'tap-list',
  inputs: ['tappedKegs'],
  template: `
  <h1>These are our current tapped kegs:</h1>
  <div *ngFor="#currentKeg of tappedKegs">
    <h3>{{currentKeg.brand}} - {{currentKeg.name}}</h3>
    <h4>ABV: {{currentKeg.alchoholByVolume}} - Price: {{currentKeg.price}}</h4>
    <h4>Number of Pints Left: {{currentKeg.pintsLeft}}</h4>
  </div>
`
})

export class TapListComponent {
  public tappedKegs: Keg[];
}
