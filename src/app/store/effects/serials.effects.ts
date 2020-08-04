import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { SerialsParams } from '../../core/models/serials-params';
import { SerialsResponse } from '../../core/models/serials-response';
import { SerialsService } from '../../services/serials.service';
import { SerialsActionsType, SerialsLoadAction, SerialsLoadFailAction, SerialsLoadSuccessAction } from '../actions/serials.actions';

@Injectable()
export class SerialsEffects {
  constructor(private service: SerialsService, private actions$: Actions) { }

  @Effect()
  public loadSerials$ = this.actions$
    .pipe(ofType<SerialsLoadAction>(SerialsActionsType.Loading),
      map(action => action.payload),
      switchMap((params: SerialsParams) =>
        this.service.getSerials(params).pipe(
          map((response: SerialsResponse) => new SerialsLoadSuccessAction(response)),
          catchError((error) => of(new SerialsLoadFailAction(error)))
        )
      )
    );
}
