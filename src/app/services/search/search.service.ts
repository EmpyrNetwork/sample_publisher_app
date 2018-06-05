import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response, Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import { Router } from '@angular/router';

@Injectable()
export class SearchService {

  private static SEARCH_ENDPOINT: string = environment.API_URL + '/api/v1/venueSearch';

  constructor(private http: Http) { }

  search(query: string): Observable<any> {
    return this.http
      .post(SearchService.SEARCH_ENDPOINT, { query })
      .map((response: Response): any => {
        const searchResult = JSON.parse(response['_body']).response.results;
        return searchResult;
      });
  }
}
