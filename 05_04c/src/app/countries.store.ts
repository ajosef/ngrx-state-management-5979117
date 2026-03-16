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

type CountriesState = {
  countries: Country[]
}

const initialState: CountriesState = {
  countries: DEFAULT_COUNTRIES
}

@Injectable({
  providedIn: 'root',
})
export class CountriesStore {

  private countryService = inject(CountryService);

  private readonly state = signalState(initialState);
  readonly countries = this.state.countries;

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

}
