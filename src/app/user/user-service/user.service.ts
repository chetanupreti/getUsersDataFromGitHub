import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
	constructor(private httpClient: HttpClient) { }

	URL = 'https://git.heroku.com/learn-redis.git/getUsersData';

	getUserDetails(users) {
		return this.httpClient.post(this.URL, { 'gitHubUserNames': users })
	}
}