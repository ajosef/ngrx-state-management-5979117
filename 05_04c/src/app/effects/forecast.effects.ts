import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {WeatherService} from '../weather.service';
import {catchError, exhaustMap, filter, map, of} from 'rxjs';
import {ROUTER_NAVIGATION} from '@ngrx/router-store';
import {ForecastActions} from '../actions/forecast.actions';


@Injectable()
export class ForecastEffects {

  actions$ = inject(Actions);
  weatherService = inject(WeatherService);

  loadCurrentForecast$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter(action => action.payload.event.url.startsWith('/forecast')),
      exhaustMap(action => {
          let zipcode = action.payload.event.url.split('/').pop();
          return this.weatherService.getForecast(zipcode).pipe(
            // If successful, dispatch success action with result
            map(data => ForecastActions.loadForecastSuccess({data})),
            // If request fails, dispatch failed action
            catchError((error) => of(ForecastActions.loadForecastFailure({zipcode, error})))
          )
        }
      )
    );
  });
}
