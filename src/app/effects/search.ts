import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Response } from '@angular/http';
import { SearchService } from '../services/search/search.service';
import * as SearchActions from '../actions/search.actions';
import { environment } from '../../environments/environment';
import { go } from '@ngrx/router-store';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/withLatestFrom';
import { State } from '../reducers/index';
import { Store } from '@ngrx/store';

@Injectable()
export class SearchEffects {

  @Effect() search$ = this.actions$
    .ofType(SearchActions.SearchAction.ACTION_TYPE)
    .switchMap((searchAction: SearchActions.SearchAction) => 
      this.searchService.search(searchAction.payload.query))
    .map((searchResult: any) => new SearchActions.RetrieveSearchResultAction(searchResult));

  constructor(private searchService: SearchService, private actions$: Actions, private store: Store<State>) { }
}
