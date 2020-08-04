import { initialSerialsState, serialsAdapter, SerialsState } from '../states/serials';
import { SerialsAction, SerialsActionsType } from '../actions/serials.actions';

export function serialsReducer(state = initialSerialsState, action: SerialsAction): SerialsState {
  switch (action.type) {
    case SerialsActionsType.Loading: {
      return { ...state, loading: true };
    }
    case SerialsActionsType.LoadSuccess: {
      return serialsAdapter.addAll(action.payload.serials, {
        ...state,
        error: false,
        loading: false,
        total: action.payload.total
      });
    }
    case SerialsActionsType.LoadFailure: {
      return serialsAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
        total: 0
      });
    }
    default:
      return state;
  }
}
