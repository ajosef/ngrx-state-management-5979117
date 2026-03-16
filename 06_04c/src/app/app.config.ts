import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import {CurrentConditionsEffects} from './effects/current-conditions.effects';
import { provideRouterStore } from '@ngrx/router-store';
import {ForecastEffects} from './effects/forecast.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(CurrentConditionsEffects, ForecastEffects),
    provideRouterStore()
]
};
