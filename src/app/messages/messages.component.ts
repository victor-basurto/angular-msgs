import { Component, OnInit, ViewChild } from '@angular/core';
import { WebService } from '../web.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MessageModel } from './messageModel';

@Component({
	selector: 'messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
	showForm: boolean = false;
	durationInSeconds: number = 20000;
	messages: any;

	constructor(private webService: WebService, private _snackBar: MatSnackBar) { }

	ngOnInit() {
		this.loadMessages().subscribe(data => {
			this.messages = data;
		}, error => {
			const errorMessage = `unable to get messages due to: \n${error} \non MessagesComponent ngOnInit Func`;
			this.webService.snackErr(errorMessage)
		})
	}

	loadMessages(): Observable<MessageModel> {
		return this.webService.getMessages();
	}

	displayForm() {
		this.showForm = !this.showForm;
	}

	newPosted($event) {
		this.messages.push($event);
	}

}
