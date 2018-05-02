import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as UserState } from '../../reducers/user.reducer';
import { State } from 'app/reducers';
import { SignupWithCardAttemptAction } from '../../actions/user.actions';


@Component({
  selector: 'signup-with-card-page',
  templateUrl: './signup-with-card-page.component.html',
  styleUrls: ['./signup-with-card-page.component.scss']
})
export class SignupWithCardPageComponent {
  constructor(
    private store: Store<State>,
  ) {
    
  }


  ngOnInit() {

  }

  addPayment(billingDetails: any) {
  	this.store.dispatch(new SignupWithCardAttemptAction(billingDetails));
  }
}