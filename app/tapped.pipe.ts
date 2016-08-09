import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "tapped",
  pure: false
})
export class TappedPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredState = args[0];

    return input.filter((keg) => (keg.isTapped === desiredState));
  }
}
