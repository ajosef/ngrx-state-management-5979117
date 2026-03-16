import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {WeatherService} from '../weather.service';
import {ZipCodeActions} from '../actions/zip-code.actions';
import {catchError, exhaustMap, map, of} from 'rxjs';
import {CurrentConditionsActions} from '../actions/current-conditions.actions';



@Injectable()
export class CurrentConditionsEffects {

  actions$ = inject(Actions);
  weatherService = inject(WeatherService);

  loadCurrentConditions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ZipCodeActions.addZipCode),
      exhaustMap(action =>
        this.weatherService.getCurrentConditions(action['zipcode']).pipe(
          // If successful, dispatch success action with result
          map(conditions => CurrentConditionsActions.currentConditionsLoaded({
            zipcode: action['zipcode'],
            conditions
          })),
          // If request fails, dispatch failed action
          catchError(error => of(CurrentConditionsActions.currentConditionsFailed({
            zipcode: action['zipcode'],
            error
          })))
        )
      )
    );
  });

  removeCurrentConditions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ZipCodeActions.removeZipCode),
      exhaustMap(({zipcode}) => of(CurrentConditionsActions.removeCurrentConditions({zipcode})))
    )
  });
}
