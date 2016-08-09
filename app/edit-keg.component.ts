import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <input [(ngModel)] = 'keg.name'>
    <input [(ngModel)] = 'keg.brand'>
    <input [(ngModel)] = 'keg.alchoholByVolume'>
    <input [(ngModel)] = 'keg.price'>
  `
})

export class EditKegComponent {

}
