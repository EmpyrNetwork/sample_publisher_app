import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers/search.reducer';
import { SearchAction } from '../../actions/search.actions';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from'../../reducers';

@Component({
  selector: 'empyr-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {

  showmessage:string;
  searchResults: Observable<any>;

  constructor(private store: Store<State>) {
    this.searchResults = this.store.select(fromRoot.getSearchResults);
  }

  ngOnInit() {
    
  }

  selectedItem(message: string){
    this.store.dispatch(new SearchAction(message));
  }
}
  
