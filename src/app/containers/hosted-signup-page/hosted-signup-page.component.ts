import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as CryptoJS from 'crypto-js';
import * as HostedFields from 'empyr_web/hostedFields'
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { State as UserState } from '../../reducers/user.reducer';
import { State } from 'app/reducers';
import { HostedFieldsSignupAttemptAction } from '../../actions/user.actions';
import { UserService } from '../../services/user/user.service';

@Component({
	selector: 'hosted-signup-page',
	templateUrl: './hosted-signup-page.component.html',
	styleUrls: ['./hosted-signup-page.component.scss'],
	providers: [UserService]           
})

export class HostedSignupPageComponent implements OnInit {

	cardNumber: String;
	addressZip: String;

	constructor(private store: Store<State>, public userService: UserService){

	}

  	ngOnInit() {
  		this.setup();
  	}

  	setup() {
		var self = this;
		const expires = Math.round(Date.now()/1000) + 3600;

		this.userService.getUserData(expires).subscribe(userData => {
			HostedFields.setup(
				environment.API_KEY,
				'custom',
				{
		  			id: 'payment-form',
					url: environment.HOSTED_API_URL,
					onRegistered: function(registerDetails){
						const req = {
							firstName: userData.firstName,
							lastName: userData.lastName,
							email: userData.email,
							addressZip: self.addressZip
						}

					  	self.store.dispatch(new HostedFieldsSignupAttemptAction(req));

						console.log(registerDetails)
						alert('Success');
					},
					onError: function(err){
						console.log(err);
						alert('Error');
					},
					fields: {
						userDetails: userData.token,
						styles: {
							input: {
								color: '#0000FF'
		          			}
		        		},
						cardNumber: {
							selector: '#card-number'
						}
					}
		  		}
		  	);
		});
  	}
}
