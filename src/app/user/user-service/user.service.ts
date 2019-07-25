import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {

	constructor(private httpClient: HttpClient) { }

	URL = 'http://localhost:5000';

	getUserDetails(users) {
		this.httpClient.post(this.URL, { 'users': users })
			.subscribe(res => {
				console.log(res);
			}), (err) => {
				console.log(err);
			}
	}
}