import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-show-user-details',
    templateUrl: './show-user-details.component.html',
    styleUrls: ['./show-user-details.component.scss']
})
export class ShowUserDetailsComponent implements OnInit {
    @Input() userDetails;
    constructor() { }

    ngOnInit() {
    }

}
