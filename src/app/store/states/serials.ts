import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Serials } from '../../core/models/serials';

export interface SerialsState extends EntityState<Serials> {
  error: boolean;
  loading: boolean;
  total: number;
}

export const serialsAdapter: EntityAdapter<Serials> = createEntityAdapter<Serials>({
  selectId: (serials: Serials) => serials.id
});

export const initialSerialsState: SerialsState = serialsAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0
});
