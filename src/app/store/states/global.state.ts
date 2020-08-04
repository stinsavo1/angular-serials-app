import { initialSerialsState, SerialsState } from './serials';

export interface GlobalState {
  serials: SerialsState;
}

export const initialGlobalState: GlobalState = {
  serials: initialSerialsState
};
