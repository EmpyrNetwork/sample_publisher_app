import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State as UserState } from '../../reducers/user.reducer';
import { State } from 'app/reducers';
import {UserRegisterAttemptAction} from '../../actions/user.actions';
import 'rxjs/add/operator/pluck';

@Component({
	selector: 'empyr-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
	user: Observable<UserState>;
	message: Observable<string>;

	constructor(private store: Store<State>) {
	  this.user = this.store.select<UserState>('user');
	  this.message = this.user.pluck('message');
	}

	onSubmit(form: NgForm) {
	  const { email, password, firstName, lastName } = form.value;
	  this.store.dispatch(new UserRegisterAttemptAction(email, password, firstName, lastName));
	  form.reset();
	}
}