import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegDisplayComponent } from './keg.component';
import { TappedPipe } from './tapped.pipe';
import { EmptyPipe } from './empty.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegDisplayComponent],
  pipes: [TappedPipe, EmptyPipe],
  template: `
  <h1>Taplist:</h1>
  <keg-display *ngFor="#currentKeg of kegList | tapped:filterTapped | empty:filterNotEmpty" [keg]="currentKeg"></keg-display>
  <h1>Storeroom:</h1>
  <keg-display *ngFor="#currentKeg of kegList | tapped:filterUntapped" [keg]="currentKeg"></keg-display>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public filterUntapped: boolean = false;
  public filterTapped: boolean = true;
  public filterNotEmpty: boolean = false;

}
