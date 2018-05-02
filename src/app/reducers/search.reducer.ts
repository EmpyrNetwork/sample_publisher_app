import { Action } from '@ngrx/store';
import * as SearchAction from '../actions/search.actions';

export interface State {
  searchResult: any;
}

export const defaultState: State = {
  searchResult: {}
};

export function reducer(state = defaultState, action: Action) {
  switch (action.type) {
    case SearchAction.RetrieveSearchResultAction.ACTION_TYPE: {
    	console.log(Object.assign({}, state, { searchResult: action.payload.searchResult }))
      return Object.assign({}, state, { searchResult: action.payload.searchResult });
    }
    default:
      return state;
  }
}

export const getSearchResults = (state: State) => state.searchResult;
