import { Component, OnInit, Input} from '@angular/core';

import * as Tracker from 'empyr_web/tracker'

@Component({
  selector: 'search-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class SearchResultsComponent implements OnInit {

  @Input() searchResults: any;

  constructor() {
  	
  }

  ngOnInit() {
  	Tracker.setup('abc123', {u:'xyz', watch:true});
  }
}
