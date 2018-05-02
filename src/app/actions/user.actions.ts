import { Action } from '@ngrx/store';
import { User } from '../models/user';

const USER_REGISTER_ATTEMPT = 'USER_REGISTER_ATTEMPT';
const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'; 
const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE'; 
const USER_LOGIN_ATTEMPT = 'USER_LOGIN_ATTEMPT';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
const SIGNUPWITHCARD_ATTEMPT = 'SIGNUPWITHCARD_ATTEMPT';
const SIGNUPWITHCARD_SUCCESS = 'SIGNUPWITHCARD_SUCCESS'; 
const SIGNUPWITHCARD_FAILURE = 'SIGNUPWITHCARD_FAILURE'; 
const HOSTEDFIELDSSIGNUP_ATTEMPT = 'HOSTEDFIELDSSIGNUP_ATTEMPT';
const HOSTEDFIELDSSIGNUP_SUCCESS = 'HOSTEDFIELDSSIGNUP_SUCCESS'; 
const HOSTEDFIELDSSIGNUP_FAILURE = 'HOSTEDFIELDSSIGNUP_FAILURE'; 
const USER_LOGOUT = 'USER_LOGOUT';

export class UserLoginAttemptAction implements Action {
  public static readonly ACTION_TYPE = USER_LOGIN_ATTEMPT;

  public readonly type = UserLoginAttemptAction.ACTION_TYPE;
  public payload?: { email: string, password: string } = { email: null, password: null };

  constructor(email: string, password: string) {
    Object.assign(this.payload, {
      email: email,
      password: password
    });
  }
}

export class UserLoginSuccessAction implements Action {
  public static readonly ACTION_TYPE = USER_LOGIN_SUCCESS;

  public readonly type = UserLoginSuccessAction.ACTION_TYPE;
  public payload?: { } = { };

  constructor() {
  }
}

export class UserLoginFailureAction implements Action {
  public static readonly ACTION_TYPE = USER_LOGIN_FAILURE;

  public readonly type = UserLoginFailureAction.ACTION_TYPE;
  public payload?: { message: string } = { message: null };

  constructor(message: string) {
    Object.assign(this.payload, {
      message: message
    });
  }
}

export class UserRegisterAttemptAction implements Action {
  public static readonly ACTION_TYPE = USER_REGISTER_ATTEMPT;

  public readonly type = UserRegisterAttemptAction.ACTION_TYPE;
  public payload?: { email: string, password: string, firstName: string, lastName: string } = { email: null, password: null, firstName: null, lastName: null };

  constructor(email: string, password: string, firstName: string, lastName: string) {
    Object.assign(this.payload, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    });
    console.log(this.payload)
  }
}

export class UserRegisterSuccessAction implements Action {
  public static readonly ACTION_TYPE = USER_LOGIN_SUCCESS;

  public readonly type = UserRegisterSuccessAction.ACTION_TYPE;
  public payload?: { } = { };

  constructor() {
  }
}

export class UserRegisterFailureAction implements Action {
  public static readonly ACTION_TYPE = USER_REGISTER_FAILURE;

  public readonly type = UserRegisterFailureAction.ACTION_TYPE;
  public payload?: { message: string } = { message: null };

  constructor(message: string) {
    Object.assign(this.payload, {
      message: message
    });
  }
}

export class UserLogoutAction implements Action {
  public static readonly ACTION_TYPE = USER_LOGOUT;

  public readonly type = UserLogoutAction.ACTION_TYPE;
  public payload?: null = null;

  constructor() {
  }
}

export class SignupWithCardAttemptAction implements Action {
  public static readonly ACTION_TYPE = SIGNUPWITHCARD_ATTEMPT;

  public readonly type = SignupWithCardAttemptAction.ACTION_TYPE;
  public payload?: { } = { };

  constructor(cardDetails: any) {
    Object.assign(this.payload, cardDetails);
  }
}

export class SignupWithCardSuccessAction implements Action {
  public static readonly ACTION_TYPE = SIGNUPWITHCARD_SUCCESS;

  public readonly type = SignupWithCardSuccessAction.ACTION_TYPE;
  public payload?: { user: User } = { user: null };

  constructor(user: User) {
    Object.assign(this.payload, {
      user: user
    });
  }
}

export class SignupWithCardFailureAction implements Action {
  public static readonly ACTION_TYPE = SIGNUPWITHCARD_FAILURE;

  public readonly type = SignupWithCardFailureAction.ACTION_TYPE;
  public payload?: { message: string } = { message: null };

  constructor(message: string) {
    Object.assign(this.payload, {
      message: message
    });
  }
}

export class HostedFieldsSignupAttemptAction implements Action {
  public static readonly ACTION_TYPE = HOSTEDFIELDSSIGNUP_ATTEMPT;

  public readonly type = HostedFieldsSignupAttemptAction.ACTION_TYPE;
  public payload?: { } = { };

  constructor(cardDetails: any) {
    Object.assign(this.payload, cardDetails);
  }
}

export class HostedFieldsSignupSuccessAction implements Action {
  public static readonly ACTION_TYPE = HOSTEDFIELDSSIGNUP_SUCCESS;

  public readonly type = HostedFieldsSignupSuccessAction.ACTION_TYPE;
  public payload?: { user: User } = { user: null };

  constructor(user: User) {
    Object.assign(this.payload, {
      user: user
    });
  }
}

export class HostedFieldsSignupFailureAction implements Action {
  public static readonly ACTION_TYPE = HOSTEDFIELDSSIGNUP_FAILURE;

  public readonly type = HostedFieldsSignupFailureAction.ACTION_TYPE;
  public payload?: { message: string } = { message: null };

  constructor(message: string) {
    Object.assign(this.payload, {
      message: message
    });
  }
}