import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from '../user-service/user.service';
@Component({
	selector: 'app-get-user-details',
	templateUrl: './get-user-details.component.html',
	styleUrls: ['./get-user-details.component.scss']
})
export class GetUserDetailsComponent implements OnInit {

	constructor(private fb: FormBuilder,
		private userService: UserService) { }

	userName: FormGroup;	
	submitted:boolean = false;
	ngOnInit() {
		this.userName = this.fb.group({
			userNames: ['', Validators.required ]
		})
	}
	
	get userForm() { 
		return this.userName.controls; 
	}

	onSubmit() {
		this.submitted = true;
		console.log(this.userForm);
	}
}
