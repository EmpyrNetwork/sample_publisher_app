import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Response } from '@angular/http';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user';
import * as UserActions from '../actions/user.actions';
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
export class UserEffects {
    @Effect() login$ = this.actions$
    .ofType(UserActions.UserLoginAttemptAction.ACTION_TYPE)
    .switchMap((userLoginAttempt: UserActions.UserLoginAttemptAction) =>
        this.userService.login(userLoginAttempt.payload.email, userLoginAttempt.payload.password)
          .mergeMap(() => {
            return [
              new UserActions.UserLoginSuccessAction(),
              go(['/search'])
            ];
          })
          .catch((err) => {
            if (err instanceof Response) {
              return Observable.of(new UserActions.UserLoginFailureAction(err.json().message));
            }

            return Observable.of(new UserActions.UserLoginFailureAction('There was an error while logging in.'));
          })
    );

  @Effect() logout$ = this.actions$
    .ofType(UserActions.UserLogoutAction.ACTION_TYPE)
    .switchMap(() => {
      if (!localStorage.getItem('current_user')) {
        return Observable.of(null);
      }

      return this.userService.logout();
    })
    .map(() => go(['/']));

  @Effect() register$ = this.actions$
    .ofType(UserActions.UserRegisterAttemptAction.ACTION_TYPE)
    .switchMap((userRegisterAttempt: UserActions.UserRegisterAttemptAction) =>
        this.userService.register(
          userRegisterAttempt.payload.email,
          userRegisterAttempt.payload.password,
          userRegisterAttempt.payload.firstName,
          userRegisterAttempt.payload.lastName,
        ).mergeMap(() => {
            return [
              new UserActions.UserRegisterSuccessAction(),
              go(['/search'])
            ];
          })
          .catch((err) => {
            if (err instanceof Response) {
              return Observable.of(new UserActions.UserRegisterFailureAction(err.json().message));
            }

            return Observable.of(new UserActions.UserRegisterFailureAction('There was an error while signing up.'));
          })
    );

   @Effect() signupWithCard$ = this.actions$
    .ofType(UserActions.SignupWithCardAttemptAction.ACTION_TYPE)
    .switchMap((signupWithCardAttempt: UserActions.SignupWithCardAttemptAction) =>
        this.userService.signupWithCard(signupWithCardAttempt.payload)
          .mergeMap((result: any) => {
            return [
              new UserActions.SignupWithCardSuccessAction(result),
              go(['/search'])
            ];
          })
          .catch((err) => {
            if (err instanceof Response) {
              return Observable.of(new UserActions.SignupWithCardFailureAction(err.json().message));
            }

            return Observable.of(new UserActions.SignupWithCardFailureAction('There was an error while signing up.'));
          })
    );

  constructor(private userService: UserService, private actions$: Actions, private store: Store<State>) { }
}
