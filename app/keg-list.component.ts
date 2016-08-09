import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegDisplayComponent } from './keg.component';
import { TappedPipe } from './tapped.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegDisplayComponent],
  pipes: [TappedPipe],
  template: `
  <h1>Storeroom:</h1>
  <keg-display *ngFor="#currentKeg of kegList | tapped:filterUntapped" [keg]="currentKeg"></keg-display>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public filterUntapped: boolean = false;
}
