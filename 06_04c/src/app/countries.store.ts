import {Country} from './app.types';
import {computed, inject} from '@angular/core';
import {patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState} from '@ngrx/signals';
import {CountryService} from './country.service';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {exhaustMap, pipe, tap} from 'rxjs';
import {toObservable} from '@angular/core/rxjs-interop';

const DEFAULT_COUNTRIES: Country[] = [
  {code: 'US', name: 'United States of America'},
  {code: 'CA', name: 'Canada'},
  {code: 'FR', name: 'France'}
];

type CountriesState = {
  countries: Country[],
  selectedCountry: string
}

const initialState: CountriesState = {
  countries: DEFAULT_COUNTRIES,
  selectedCountry: ""
}

export const CountriesStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withComputed(store => ({
    count: computed(() => store.countries().length),
  })),
  withProps(store => ({
    count$: toObservable(store.count)
  })),
  withMethods((store, countryService = inject(CountryService)) => ({

    selectCountry(selectedCountry: string) {
      patchState(store, {selectedCountry});
    },

    _loadCountries: rxMethod<void>(
      pipe(
        exhaustMap(() => {
          return countryService.getCountries().pipe(
            tap({
              next: (countries) => patchState(store, {countries}),
            })
          );
        })
      )
    )
  })),
  withHooks({
    onInit(store) {
      store._loadCountries();
    }
  })
);

