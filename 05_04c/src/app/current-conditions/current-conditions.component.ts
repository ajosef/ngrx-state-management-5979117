import {Component, inject, input, output} from '@angular/core';
import { DecimalPipe, KeyValuePipe} from '@angular/common';
import {WeatherService} from '../weather.service';
import {CurrentConditionsState} from '../reducers/current-conditions.reducer';
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

  clickedZip = output<string>();

  zipRemoved = output<string>();

  weatherService = inject(WeatherService);

}
