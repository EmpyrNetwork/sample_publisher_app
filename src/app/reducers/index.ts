import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as UserActions from '../actions/user.actions';

import * as fromUser from './user.reducer';
import * as fromSearchResult from './search.reducer';

export interface State {
  user: fromUser.State;
  searchResult: fromSearchResult.State; 
}

const reducers = {
  user: fromUser.reducer,
  searchResult: fromSearchResult.reducer,
  router: fromRouter.routerReducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

/* istanbul ignore next */
export function reducer(state: any, action: any) {
  switch (action.type) {
    default:
      return productionReducer(state, action);
  }
}

export const getSearchResults = createSelector((state: State) => state.searchResult, fromSearchResult.getSearchResults);