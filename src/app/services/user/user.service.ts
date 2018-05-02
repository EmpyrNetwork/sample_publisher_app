import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  private static REGISTER_ENDPOINT: string = environment.API_URL + '/api/v1/user/register';
  private static LOGIN_ENDPOINT: string = environment.API_URL + '/api/v1/user/login';
  private static SIGNUPWITHCARD_ENDPOINT: string = environment.API_URL + '/api/v1/user/signupWithCard';
  private static HOSTEDFIELDSSIGNUP_ENDPOINT: string = environment.API_URL + '/api/v1/user/hostedFieldsSignup';
  private static HOSTEDFIELDSSIGNUP_USER_ENDPOINT: string = environment.API_URL + '/api/v1/user/hostedFieldsSignup/data';

  constructor(private http: Http, private authHttp: AuthHttp) { }

  register(email: string, password: string, firstName: string, lastName: string) {
    return this.http
      .post(UserService.REGISTER_ENDPOINT, { email, password, firstName, lastName })
      .map((response: Response) => {
        const token = response.headers.get('Authorization').replace('Bearer ', '')
        const user = {token: token};
        localStorage.setItem('current_user', JSON.stringify(user));
      });
  }

  login(email: string, password: string) {
    return this.http
      .post(UserService.LOGIN_ENDPOINT, { email, password })
      .map((response: Response) => {
        const token = response.headers.get('Authorization').replace('Bearer ', '')
        const user = {token: token};
        localStorage.setItem('current_user', JSON.stringify(user));
      });
  }

  logout() {
    localStorage.removeItem('current_user');
    return null;
  }

  checkLogin(){
      var current_user = JSON.parse(localStorage.getItem('current_user'));
      if (current_user){
          return true
      }
      else{
          return false
      }
  }

  signupWithCard(cardDetails: any): Observable<User> {
    const res = JSON.parse(localStorage.getItem("current_user"));
    const token = res.token;
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + token );

    let options = new RequestOptions({headers: headers});
    const req = {
      user: {
        address: {
          postalCode: cardDetails.addressZip
        }
      },
      billingDetail: {
        cardNumber: cardDetails.cardNumber
      }
    };

    console.log(req)

    return this.http
      .post(UserService.SIGNUPWITHCARD_ENDPOINT, req, options)
      .map((response: Response): any => {
        
      });
  }

  hostedFieldsSignup(details: any): Observable<User> {
    const res = JSON.parse(localStorage.getItem("current_user"));
    const token = res.token;
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + token );

    let options = new RequestOptions({headers: headers});
    const req = {
      user: {
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
        address: {
          postalCode: details.addressZip
        }
      }
    };

    console.log(req)

    return this.http
      .post(UserService.HOSTEDFIELDSSIGNUP_ENDPOINT, req, options)
      .map((response: Response): any => {
         console.log(response);
      });
  }

  getUserData(expires: any): Observable<any> {
    const res = JSON.parse(localStorage.getItem("current_user"));
    const token = res.token;
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + token );

    let options = new RequestOptions({headers: headers})
    const req = {
      expires_in: expires
    };

    return this.http
      .post(UserService.HOSTEDFIELDSSIGNUP_USER_ENDPOINT, req, options)
      .map((response: any): any => {
        var json = JSON.parse(response._body);
        console.log(json);
        return json;
      });
  }
}
