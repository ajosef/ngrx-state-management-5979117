import {Component, effect, inject} from '@angular/core';
import {ZipcodeEntryComponent} from '../zipcode-entry/zipcode-entry.component';
import {CurrentConditionsComponent} from '../current-conditions/current-conditions.component';
import {Store} from '@ngrx/store';
import {ZipCodeActions} from '../actions/zip-code.actions';
import {CurrentConditionsState} from '../reducers/current-conditions.reducer';
import {selectCurrentConditions} from '../reducers';
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
  countriesStore = inject(CountriesStore);
  countries = this.countriesStore.countries;
  selCountryCode = this.countriesStore.selCountryCode;

  ctryCodeEff = effect(() =>
    console.log('selCtryCode from store:', this.selCountryCode())
  );

  //addLocation(zipcode : string){
  addLocation($event: { zipcode: string, countryCode: string }) {
    this.countriesStore.setSelectedCountry($event.countryCode);
    const zip = $event.zipcode + ',' + $event.countryCode;
    this.store.dispatch(ZipCodeActions.addZipCode({zipcode: zip}));
    //this.store.dispatch(ZipCodeActions.addZipCode({zipcode}));
  }
  currentConditions = this.store.selectSignal<CurrentConditionsState>(selectCurrentConditions);

  removeZip(zipcode: string) {
    this.store.dispatch(ZipCodeActions.removeZipCode({zipcode}));
  }

  updateSelCountry(zipCtryCode: string) {
    const [zip, ctryCode] = zipCtryCode.split(',');
    this.countriesStore.setSelectedCountry(ctryCode);
  }


}
