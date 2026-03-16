import {Component, inject, input, output} from '@angular/core';
import {Store} from '@ngrx/store';
import {zipCodesFeatureKey} from '../reducers/zip-codes.reducer';
import {AsyncPipe, DecimalPipe, KeyValuePipe} from '@angular/common';
import {WeatherService} from '../weather.service';
import {CurrentConditionsState} from '../reducers/current-conditions.reducer';
import {ZipCodeActions} from '../actions/zip-code.actions';
import {selectCurrentConditions} from '../reducers';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  imports: [
    DecimalPipe,
    KeyValuePipe,
    RouterLink
  ],
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  currentConditions = input.required<CurrentConditionsState>();

  zipRemoved = output<string>();

  weatherService = inject(WeatherService);

}
