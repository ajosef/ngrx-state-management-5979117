import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Forecast } from '../app.types';

export const ForecastActions = createActionGroup({
  source: 'Forecast/API',
  events: {
    'Load Forecast': props<{ zipcode: string }>(),
    'RemoveForecast': props<{ zipcode: string}>(),
    'ForecastLoaded': props<{ zipcode: string, forecast: Forecast }>(),
    'ForecastLoadFailed': props<{ zipcode: string, error: Error }>(),
  }
});
