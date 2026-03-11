import { DatePipe, DecimalPipe } from '@angular/common';
import {Component, computed, effect, inject, input} from '@angular/core';
import { RouterLink} from '@angular/router';
import { WeatherService } from '../weather.service';
import { Forecast } from '../app.types';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import { ForecastState } from '../reducers/forecast.reducer';
@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  imports: [
    RouterLink,
    DatePipe, DecimalPipe
  ],
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  private readonly store = inject(Store);

  //forecast = input.required<Forecast>();
  zipcode = input.required<string>();
  protected readonly forecastState =
    this.store.selectSignal<ForecastState>((state: State) => state.forecasts);
  protected readonly forecast = computed<Forecast>(() => this.forecastState()[this.zipcode()]);

  protected readonly zipInpEff = effect(() =>
    console.log('input zip:', this.zipcode()));

  protected readonly forecastEff = effect(() =>
    console.log('forecast signal:', this.forecast()));

  protected readonly weatherService = inject(WeatherService);
}
