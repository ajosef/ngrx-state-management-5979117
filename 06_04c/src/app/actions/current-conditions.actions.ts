import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {CurrentConditions} from '../app.types';

export const CurrentConditionsActions = createActionGroup({
  source: 'CurrentConditions',
  events: {
    'RemoveCurrentConditions': props<{ zipcode: string}>(),
    'CurrentConditionsLoaded': props<{ zipcode: string, conditions: CurrentConditions }>(),
    'CurrentConditionsFailed': props<{ zipcode: string, error: Error }>(),
  }
});
