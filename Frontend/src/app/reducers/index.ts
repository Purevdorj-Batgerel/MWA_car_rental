import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as userReducer from './user.reducer';

import { environment } from '../../environments/environment';

export interface State {
  user: userReducer.State
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
