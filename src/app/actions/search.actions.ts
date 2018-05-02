import { Action } from '@ngrx/store';

const SEARCH_ACTION = 'SEARCH_ACTION';
const RETRIEVE_SEARCH_RESULT_ACTION = 'RETRIEVE_SEARCH_RESULT_ACTION';

export class SearchAction implements Action {
  public static readonly ACTION_TYPE = SEARCH_ACTION;

  public readonly type = SearchAction.ACTION_TYPE;
  public payload?: { query: string } = { query: null };

  constructor(query: string) {
    Object.assign(this.payload, {
      query: query
    });
  }
}

export class RetrieveSearchResultAction implements Action {
  public static readonly ACTION_TYPE = RETRIEVE_SEARCH_RESULT_ACTION;

  public readonly type = RetrieveSearchResultAction.ACTION_TYPE;
  public payload?: { searchResult: any } = { searchResult: null };

  constructor(searchResult: any) {
    this.payload = Object.assign(this.payload, {
      searchResult: searchResult
    });
  }
}