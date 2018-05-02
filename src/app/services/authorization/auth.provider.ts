/* istanbul ignore next */
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenName: 'token',
        tokenGetter: tokenGetter
    }), http, options);
}

export const tokenGetter: () => string | Promise<string> = () => {
  try {
    const user = JSON.parse(localStorage.getItem('current_user'));
    return user && user.token;
  } catch (error) {
    console.error(error);
    console.error('Error attempting to parse current_user from localStorage!');
  }
};

export const AUTH_PROVIDER = {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
};