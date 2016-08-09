import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <br>
    <input [(ngModel)]='keg.name'>
    <input [(ngModel)]='keg.brand'>
    <label>ABV:</label>
    <input [(ngModel)]='keg.alchoholByVolume'>
    <label>Price: \$</label>
    <input [(ngModel)]='keg.price'>
    <label>Pints left:</label>
    <input [(ngModel)]='keg.pintsLeft'>
  `
})

export class EditKegComponent {

}
