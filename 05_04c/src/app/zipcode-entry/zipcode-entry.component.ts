import {Component, effect, input, output} from '@angular/core';
import { Country } from '../app.types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  imports: [FormsModule]
})
export class ZipcodeEntryComponent {

  countries = input.required<Country[]>();
  selCountryCode = input<string>();
  zipAdded = output<{ zipcode: string, countryCode: string }>();

  selCtryInpEff = effect(() =>
    console.log('input selCtry from parent:', this.selCountryCode())
  );

  addLocation(zipcode: string, countryCode: string) {
    // TODO Add support for country here
    //this.zipAdded.emit(zipcode + ','+countryCode);
    this.zipAdded.emit({ zipcode,countryCode});
  }



}
