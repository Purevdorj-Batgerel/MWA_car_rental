import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as userReducer from './user.reducer';
import * as dealReducer from './deal.reducer';

import { environment } from '../../environments/environment';

export interface State {
  user: userReducer.State,
  deal: dealReducer.State
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer.reducer,
  deal: dealReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
