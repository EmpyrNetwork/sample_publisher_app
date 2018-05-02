import { Action } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '../models/user';

export interface State {
  user: User;
  isAuthenticating: boolean;
  message: string;
}

export const defaultState: State = {
  user: JSON.parse(localStorage.getItem('current_user')),
  isAuthenticating: false,
  message: null
};

export function reducer(state = defaultState, action: Action) {
  switch (action.type) {
  	case UserActions.UserLoginAttemptAction.ACTION_TYPE:
      return Object.assign({}, state, { isAuthenticating: true, user: null, message: null });
    case UserActions.UserLoginSuccessAction.ACTION_TYPE:
      const loginSuccess = (action as UserActions.UserLoginSuccessAction);
      return Object.assign({}, state, { isAuthenticating: false, message: null });
    case UserActions.UserLoginFailureAction.ACTION_TYPE:
      const loginFailure = (action as UserActions.UserLoginFailureAction);
      return Object.assign({}, state, { isAuthenticating: false, user: null, message: loginFailure.payload.message });
    case UserActions.UserLogoutAction.ACTION_TYPE:
      return Object.assign({}, {
        user: null,
        isAuthenticating: false,
        message: null
      });
    case UserActions.UserRegisterAttemptAction.ACTION_TYPE:
      return Object.assign({}, state, { user: null, message: null });
    case UserActions.UserRegisterSuccessAction.ACTION_TYPE:
      const registerSuccess = (action as UserActions.UserRegisterSuccessAction);
      return Object.assign({}, state, { message: null });
    case UserActions.UserRegisterFailureAction.ACTION_TYPE:
      const registerFailure = (action as UserActions.UserRegisterFailureAction);
      return Object.assign({}, state, { user: null, message: registerFailure.payload.message });

    default:
      return state;
  }
}