export class RegisterModel {
	constructor(
		public FirstName: string,
		public LastName: string,
		public Email: string,
		public Password: string,
		public PasswordConfirm?: string
	) {}
}