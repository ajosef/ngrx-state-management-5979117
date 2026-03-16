import {Component, input, output} from '@angular/core';
import {Country} from '../app.types';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  countries = input.required<Country[]>();
  zipAdded = output<string>();

  addLocation(zipcode: string, country: string) {
    // TODO Add support for country here
    this.zipAdded.emit(zipcode);
  }

}
