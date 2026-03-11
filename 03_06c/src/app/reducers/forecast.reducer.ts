import { createReducer, on } from '@ngrx/store';
import { ForecastActions } from '../actions/forecast.actions';
import { Forecast } from '../app.types';

export const forecastsFeatureKey = 'forecasts';

export type ForecastState = Record<string, Forecast>;

export const initialState: ForecastState = {};

export const forecastReducer = createReducer(
  initialState,
  on(ForecastActions.forecastLoaded,
    (state, action) => ({...state, [action.zipcode]: action.forecast})),
    //(state, action) => adapter.addOne(action.forecast, state),
  on(ForecastActions.removeForecast,
    (state, action) => {
      const newState = {...state};
      delete newState[action.zipcode];
      return newState;
    })
);
