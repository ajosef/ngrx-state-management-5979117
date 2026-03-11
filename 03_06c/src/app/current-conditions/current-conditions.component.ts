import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {zipCodesFeatureKey} from '../reducers/zip-codes.reducer';
import {AsyncPipe, DecimalPipe, KeyValuePipe} from '@angular/common';
import {WeatherService} from '../weather.service';
import {CurrentConditionsState} from '../reducers/current-conditions.reducer';
import {ZipCodeActions} from '../actions/zip-code.actions';
import {selectCurrentConditions} from '../reducers';
import {Router, RouterLink} from '@angular/router';
import { ForecastActions } from '../actions/forecast.actions';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  imports: [
    DecimalPipe,
    KeyValuePipe,
    //RouterLink
  ],
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  private router = inject(Router);
  private store = inject(Store);
  currentConditions = this.store.selectSignal<CurrentConditionsState>(selectCurrentConditions);

  weatherService = inject(WeatherService);

  removeZip(zipcode: string) {
    this.store.dispatch(ZipCodeActions.removeZipCode({zipcode}));
  }

  onForecastClick(zip: string) {
    this.store.dispatch(ForecastActions.loadForecast({ zipcode: zip }));
    this.router.navigate([`forecast/${zip}`]);
  }


}
