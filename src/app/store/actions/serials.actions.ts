import { Action } from '@ngrx/store';
import { SerialsParams } from '../../core/models/serials-params';
import { SerialsResponse } from 'src/app/core/models/serials-response';

export enum SerialsActionsType {
  Loading = '[Serials] Loading',
  LoadSuccess = '[Serials] LoadSuccess',
  LoadFailure = '[Serials] LoadFailure'
}

export class SerialsLoadAction implements Action {
  public readonly type = SerialsActionsType.Loading;
  constructor(public payload: SerialsParams) {}
}

export class SerialsLoadSuccessAction implements Action {
  public readonly type = SerialsActionsType.LoadSuccess;
  constructor(public payload: SerialsResponse) {}
}

export class SerialsLoadFailAction implements Action {
  public readonly type = SerialsActionsType.LoadFailure;
  constructor(public error: any) {}
}

export type SerialsAction = SerialsLoadAction | SerialsLoadSuccessAction | SerialsLoadFailAction;
