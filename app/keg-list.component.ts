import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegDisplayComponent } from './keg.component';
import { TappedPipe } from './tapped.pipe';
import { EmptyPipe } from './empty.pipe';
import { AddKegComponent } from './add-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegDisplayComponent, AddKegComponent],
  pipes: [TappedPipe, EmptyPipe],
  template: `
  <h1 class="text-center">Taplist:</h1>
    <section class="tap-list">
      <keg-display *ngFor="#currentKeg of kegList | tapped:filterTapped | empty:filterNotEmpty" [keg]="currentKeg"></keg-display>
    </section>
  <h1 class="text-center">Storeroom:</h1>
  <section class="storeroom">
    <keg-display *ngFor="#currentKeg of kegList | tapped:filterUntapped" [keg]="currentKeg"></keg-display>
  </section>
  <h1 class="text-center">Empty Kegs:</h1>
  <section class="emptied">
    <keg-display *ngFor="#currentKeg of kegList | tapped:filterTapped | empty:filterEmpty" [keg]="currentKeg"></keg-display>
  </section>
  <add-keg (onSubmitNewKeg)="createKeg($event)"></add-keg>

  `
})
export class KegListComponent {
  public kegList: Keg[];
  public filterUntapped: boolean = false;
  public filterTapped: boolean = true;
  public filterNotEmpty: boolean = false;
  public filterEmpty: boolean = true;

  createKeg(keg: Keg) {
    this.kegList.push(keg);
  }
}
