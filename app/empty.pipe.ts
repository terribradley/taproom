import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "empty",
  pure: false
})

export class EmptyPipe implements PipeTransform {
  transform(input: Keg[], args) {
      var desiredEmptyState = args[0];
      return input.filter((keg) => ((keg.pintsLeft === 0) === desiredEmptyState));
  }

}
