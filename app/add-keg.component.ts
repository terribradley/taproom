import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'add-keg',
  template:`
  <div class='keg-form'>
  <input placeholder="Name" #newName>
  <input placeholder="Brand" #newBrand>
  <input placeholder="ABV" #newAlchoholByVolume>
  <input placeholder="Price" #newPrice>
  <button (click)="addKeg(newName, newBrand, newAlchoholByVolume, newPrice)">Add</button>
  `

})

export class AddKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newAlchoholByVolume: HTMLInputElement, newPrice: HTMLInputElement) {
    var newKeg = new Keg(newName.value, newBrand.value, parseInt(newAlchoholByVolume.value), parseInt(newPrice.value));
    this.onSubmitNewKeg.emit(newKeg);
  }

}
