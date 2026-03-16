import {Component, inject} from '@angular/core';
import {ZipcodeEntryComponent} from '../zipcode-entry/zipcode-entry.component';
import {CurrentConditionsComponent} from '../current-conditions/current-conditions.component';
import {Store} from '@ngrx/store';
import {ZipCodeActions} from '../actions/zip-code.actions';
import {CurrentConditionsState} from '../reducers/current-conditions.reducer';
import {selectCurrentConditions} from '../reducers';
import {WeatherService} from '../weather.service';
import {CountriesStore} from '../countries.store';

@Component({
  selector: 'app-main-page',
  imports: [
    ZipcodeEntryComponent,
    CurrentConditionsComponent
  ],
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  private store = inject(Store);
  countries = inject(CountriesStore).countries;

  addLocation(zipcode : string){
    this.store.dispatch(ZipCodeActions.addZipCode({zipcode}));
  }
  currentConditions = this.store.selectSignal<CurrentConditionsState>(selectCurrentConditions);

  removeZip(zipcode: string) {
    this.store.dispatch(ZipCodeActions.removeZipCode({zipcode}));
  }


}
