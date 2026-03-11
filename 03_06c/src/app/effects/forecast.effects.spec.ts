import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ForecastEffects } from './forecast.effects';

describe('ForecastEffects', () => {
  let actions$: Observable<any>;
  let effects: ForecastEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ForecastEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ForecastEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
