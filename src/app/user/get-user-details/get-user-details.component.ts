import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { UserService } from '../user-service/user.service';
@Component({
	selector: 'app-get-user-details',
	templateUrl: './get-user-details.component.html',
	styleUrls: ['./get-user-details.component.scss']
})
export class GetUserDetailsComponent implements OnInit {

	constructor(private userService: UserService) { }

	ngOnInit() {
	}

	user = new FormControl('', [
		Validators.required,
		Validators.maxLength(100)
	]);

	getUserDetails() {
		var users = this.user.value;
		if (users) {
			this.userService.getUserDetails(users);
		}
	}
}
