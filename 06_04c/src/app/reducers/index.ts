import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {zipCodeReducer, zipCodesFeatureKey, ZipCodeState} from './zip-codes.reducer';
import {
  currentConditionsFeatureKey,
  currentConditionsReducer,
  CurrentConditionsState
} from './current-conditions.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {forecastFeatureKey, forecastReducer, ForecastState} from './forecast.reducer';

export interface State {
  [zipCodesFeatureKey]: ZipCodeState;
  [currentConditionsFeatureKey]: CurrentConditionsState;
  [forecastFeatureKey]: ForecastState;
  router: RouterReducerState;

}

export const reducers: ActionReducerMap<State> = {
 [zipCodesFeatureKey]: zipCodeReducer,
  [currentConditionsFeatureKey]: currentConditionsReducer,
  [forecastFeatureKey]: forecastReducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export const selectCurrentConditions = (state: State) => state.currentConditions;
