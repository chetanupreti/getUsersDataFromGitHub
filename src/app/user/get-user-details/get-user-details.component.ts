import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from '../user-service/user.service';

@Component({
	selector: 'app-get-user-details',
	templateUrl: './get-user-details.component.html',
	styleUrls: ['./get-user-details.component.scss']
})
export class GetUserDetailsComponent implements OnInit {

	constructor(private fb: FormBuilder,
		private userService: UserService,
	) { }

	userName: FormGroup;
	show: boolean = true;
	userDetails = [];
	ngOnInit() {
		this.userName = this.fb.group({
			userNames: ['', Validators.required]
		})
	}

	onSubmit() {
		console.log(this.userName);
		if (!this.userName.valid) {
			return;
		}
		else {
			let sendData = this.makingUserData(this.userName.value);
			this.userService.getUserDetails(sendData)
			.subscribe(res => {
				this.userDetails = res['usersDetails'];
				this.show = false;
			}),(err =>{
				console.log(err);
			})
			
		}
	}

	makingUserData(value) {
		var userDataForBackEnd = [];
		let users = value.userNames.split(',');
		users.map((user) => {
			let obj = {};
			obj['name'] = user;
			userDataForBackEnd.push(obj);
		})
		return userDataForBackEnd;
	}

	get userForm() {
		return this.userName.controls;
	}
}
