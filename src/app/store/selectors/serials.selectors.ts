import { createSelector, createFeatureSelector } from '@ngrx/store';
import { serialsAdapter, SerialsState } from '../states/serials';

export const {
  selectIds: _selectSerialsDataIds,
  selectEntities: _selectSerialsEntities,
  selectAll: _selectAllSerials,
  selectTotal: _selectSerialsTotal
} = serialsAdapter.getSelectors();

export const selectSerialsState = createFeatureSelector<SerialsState>('serials');

export const selectSerialsIds = createSelector(
  selectSerialsState,
  _selectSerialsDataIds
);

export const selectSerialsEntities = createSelector(
  selectSerialsState,
  _selectSerialsEntities
);

export const selectAllSerials = createSelector(
  selectSerialsState,
  _selectAllSerials
);

export const selectSerialsError = createSelector(
  selectSerialsState,
  (state: SerialsState): boolean => state.error
);

export const selectSerialsLoading = createSelector(
  selectSerialsState,
  (state: SerialsState): boolean => state.loading
);


export const selectSerialsTotal = createSelector(
  selectSerialsState,
  (state: SerialsState): number => state.total
);
