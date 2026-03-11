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
import { forecastsFeatureKey, ForecastState, forecastReducer  } from './forecast.reducer';

export interface State {
  [zipCodesFeatureKey]: ZipCodeState;
  [currentConditionsFeatureKey]: CurrentConditionsState;
  router: RouterReducerState;
  [forecastsFeatureKey]: ForecastState;

}

export const reducers: ActionReducerMap<State> = {
 [zipCodesFeatureKey]: zipCodeReducer,
  [currentConditionsFeatureKey]: currentConditionsReducer,
  router: routerReducer,
  [forecastsFeatureKey]:forecastReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export const selectCurrentConditions = (state: State) => state.currentConditions;
