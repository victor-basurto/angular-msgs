import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { WebService } from '../web.service';

import { MessageModel } from '../messages/messageModel';
import { EMAIL_REGEX, matchingPass } from '../form-validation-errors';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	private registerForm: FormGroup;
	emtpyFieldError: string = 'field can\'t be empty';
	noMatchPass: string = 'Passwords doesn\'t match';

	constructor(private webService: WebService, private fb: FormBuilder) { }

	async ngOnInit() {
		this._initForm();
	}

	private _initForm() {
		this.registerForm = this.fb.group({
			'firstName': new FormControl(null, [Validators.required]),
			'lastName': new FormControl(null, [Validators.required]),
			'email': new FormControl(null, [
				Validators.required,
				Validators.pattern( EMAIL_REGEX )
			]),
			'password': new FormControl(null, [Validators.required]),
			'passwordConfirm': new FormControl(null, [Validators.required])
		}, { validator: matchingPass('password', 'passwordConfirm') });
	}

	register() {
		console.log(this.registerForm.errors);
	}


	/**
	 * getters
	 */
	get fname() { return this.registerForm.get( 'firstName' ); }
	get lname() { return this.registerForm.get( 'lastName' ); }
	get email() { return this.registerForm.get( 'email' ); }
	get pass() { return this.registerForm.get( 'password' ); }
	get passConfirm() { return this.registerForm.get( 'passwordConfirm' ); }
}
