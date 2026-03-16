import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {Forecast} from '../app.types';

export const ForecastActions = createActionGroup({
  source: 'Forecast',
  events: {
    'Load Forecast': emptyProps(),
    'Load Forecast Success': props<{ data: Forecast }>(),
    'Load Forecast Failure': props<{ zipcode: string, error: Error }>(),
  }
});
