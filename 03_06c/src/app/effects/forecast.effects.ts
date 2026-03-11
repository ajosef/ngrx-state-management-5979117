import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherService } from '../weather.service';
import { ForecastActions } from '../actions/forecast.actions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';



@Injectable()
export class ForecastEffects {
  actions$ = inject(Actions);
  weatherService = inject(WeatherService);

  loadForecast$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ForecastActions.loadForecast),
      tap(x => console.log('loadForecast', x)),
      exhaustMap(action =>
        this.weatherService.getForecast(action.zipcode).pipe(
          tap(x => console.log('weatherService.getForecast', x)),
          map(forecast => ForecastActions.forecastLoaded({
            zipcode: action.zipcode,
            forecast
          })),
          catchError(error => of(ForecastActions.forecastLoadFailed({
            zipcode: action.zipcode,
            error
          })))
        )
      )
    )
  });

}
