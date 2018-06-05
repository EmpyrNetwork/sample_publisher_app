import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers/search.reducer';
import { SearchAction } from '../../actions/search.actions';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from'../../reducers';

interface marker {
  name: string;
  latitude: Number;
  longitude: Number;
}

@Component({
  selector: 'empyr-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent {

  showmessage:string;
  searchResults:Observable<any>;
  lat:Number = 33.1581;
  long:Number = -117.3506;
  zoom:Number = 10;
  markers: marker[];

  constructor(private store: Store<State>) {
    this.searchResults = this.store.select(fromRoot.getSearchResults);
    this.searchResults.subscribe(s => {
      if(s.results){
        this.markers = s.results.map(r => { return {name: r.name, latitude: r.latitude, longitude: r.longitude}});
      }
    })
  }

  ngOnInit() {
    
  }

  selectedItem(message: string){
    this.store.dispatch(new SearchAction(message));
  }
}
  
