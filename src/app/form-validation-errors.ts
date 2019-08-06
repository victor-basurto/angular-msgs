import { AbstractControl, FormControl } from '@angular/forms';

/**
 * Error Msgs
 */
export const emtpyFieldError: string = 'field can\'t be empty';

/**
 * Constants for REGEX
 */
export const EMAIL_REGEX = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$';
export const ONLY_LETTERS = '^[a-zA-Z _\',]+$';
export const PHONE_REGEX = '^[0-9]{10,15}$';
export const ONLY_NUMBERS = '^[0-9]{1,12}$'


/**
 * Example
 */
export function emailDomainValidator(control: AbstractControl) {
	let email: string = control.value;
	if ( email && email.indexOf('@') !== 1 ) {
		let [_, domain] = email.split('@');
		if ( domain !== 'codecraft.tv' ) {
			return {
				emailDomain: {
					parsedDomain: domain
				}
			}
		}
		return null;
	}
}

/**
 * Password and Confirm Password
 */
export function matchingPass (field1, field2) {
	return form => {
		if ( form.controls[field1].value !== form.controls[field2].value ) {
			return {
				mismatchedFields: true
			}
		}
	}	
}