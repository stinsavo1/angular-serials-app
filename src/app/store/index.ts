import { ActionReducerMap } from '@ngrx/store';
import { GlobalState } from './states/global.state';
import { serialsReducer } from './reducers/serials.reducers';

export const reducers: ActionReducerMap<GlobalState> = {
  serials: serialsReducer
};
