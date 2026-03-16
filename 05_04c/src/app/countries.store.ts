import {Country} from './app.types';
import {inject, Injectable} from '@angular/core';
import {patchState, signalState} from '@ngrx/signals';
import {CountryService} from './country.service';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {exhaustMap, pipe, tap} from 'rxjs';

const DEFAULT_COUNTRIES: Country[] = [
  {code: 'US', name: 'United States of America'},
  {code: 'CA', name: 'Canada'},
  {code: 'FR', name: 'France'}
];

interface CountriesState {
  countries: Country[];
  selCountryCode: string
}

const initialState: CountriesState = {
  countries: DEFAULT_COUNTRIES,
  selCountryCode: 'US'
}

@Injectable({
  providedIn: 'root',
})
export class CountriesStore {

  private countryService = inject(CountryService);

  private readonly state = signalState(initialState);
  readonly countries = this.state.countries;
  readonly selCountryCode = this.state.selCountryCode;

  constructor() {
    this.loadCountries();
  }

  readonly loadCountries = rxMethod<void>(
    pipe(
      exhaustMap(() => {
        return this.countryService.getCountries().pipe(
          tap({
            next: (countries) => patchState(this.state, { countries }),
          })
        );
      })
    )
  );

  setSelectedCountry(countryCode: string) {
    //const ctryName = this.countryService.COUNTRIES_INDEX[countryCode];
    //const ctry:Country = {code: countryCode, name: this.countryService.COUNTRIES_INDEX[countryCode]}
    patchState(this.state, { selCountryCode:countryCode });
  }

}
