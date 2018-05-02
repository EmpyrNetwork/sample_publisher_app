import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UserService]
})


export class HeaderComponent {

	constructor(
		private userService:UserService,
		private route: Router
	){}

	loggedIn:any;

	ngOnInit(){
		if(this.userService.checkLogin()){
			this.loggedIn = true;
		}
		else{
			this.loggedIn = false
		}
	}

	logOut(){
		console.log('logout')
		this.userService.logout()
		this.route.navigate(['login'])
	}

}