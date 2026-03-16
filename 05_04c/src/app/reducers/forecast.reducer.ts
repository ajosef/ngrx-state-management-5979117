import { createReducer, on } from '@ngrx/store';
import { ForecastActions } from '../actions/forecast.actions';
import {Forecast} from '../app.types';

export const forecastFeatureKey = 'forecast';

export type ForecastState = Partial<Forecast>;

export const initialState: ForecastState = {};

export const forecastReducer = createReducer(
  initialState,
  on(ForecastActions.loadForecastSuccess, (state, action) => ({...action.data}))
);

