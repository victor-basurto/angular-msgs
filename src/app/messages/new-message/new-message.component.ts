import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebService } from '../../web.service';

import { MessageModel } from '../messageModel';

@Component({
	selector: 'app-new-message',
	templateUrl: './new-message.component.html',
	styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

	private messageForm: FormGroup;
	@Output() onPosted = new EventEmitter<any>();

	emtpyFieldError: string = 'field can\'t be empty'

	constructor(private webService: WebService) { }

	async ngOnInit() {
		this._createMessageForm()
	}

	private _createMessageForm() {
		this.messageForm = new FormGroup({
			Text: new FormControl(null, [Validators.required]),
			Owner: new FormControl(null, [Validators.required])
		});
	}

	/**
	 * add new messages
	 */
	addMessage(): void {
		// create service for posting message
		if ( this.webService.isEmptyObject(this.messageForm.value) ) {
			this.webService.snackErr(`unable to perform operation`);
		} else {
			this.webService.postMessage(this.messageForm.value).subscribe(
				(data: MessageModel) => {
					this.webService.snackErr(`added - Onwer: ${data.Owner} -Text: ${data.Text}`, 8000);
				}
			)
			this.onPosted.emit( this.messageForm.value );
		}
		this.messageForm.reset();
	}

	/**
	 * form getters
	 */
	get textVal() { return this.messageForm.get( 'Text' ) }
	get owner() { return this.messageForm.get( 'Owner' ) }
}
