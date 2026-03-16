import {Component, inject} from '@angular/core';
import { RouterLink} from '@angular/router';
import {Store} from '@ngrx/store';
import {ForecastState} from '../reducers/forecast.reducer';
import {DatePipe, DecimalPipe} from '@angular/common';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  imports: [
    RouterLink,
    DatePipe,
    DecimalPipe
  ],
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  private store = inject(Store);
  forecast = this.store.selectSignal<ForecastState>(state => state.forecast);
  weatherService = inject(WeatherService);

}
