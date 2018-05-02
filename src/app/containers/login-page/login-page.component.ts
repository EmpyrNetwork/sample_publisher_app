import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State as UserState } from '../../reducers/user.reducer';
import { State } from 'app/reducers';
import {UserLoginAttemptAction} from '../../actions/user.actions';
import 'rxjs/add/operator/pluck';

@Component({
	selector: 'empyr-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	user: Observable<UserState>;
	message: Observable<string>;

	constructor(private store: Store<State>) {
	  this.user = this.store.select<UserState>('user');
	  this.message = this.user.pluck('message');
	}

	onSubmit(form: NgForm) {
	  const { username, password } = form.value;
	  this.store.dispatch(new UserLoginAttemptAction(username, password));
	  form.reset();
	}
}
