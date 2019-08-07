import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterModel } from './registerModel';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private MessageAPI_URL: string = 'http://localhost:50780/auth';

	constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

	register(user): Observable<RegisterModel> {
		delete user.passwordConfirm;
		let formvals = new HttpParams();
		Object.keys( user ).forEach((i) => {
			formvals = formvals.set(i, user[ i ])
		});
		return this.http.post<RegisterModel>(`${this.MessageAPI_URL}/register`, formvals.toString(), httpOptions).pipe(
			tap(_ => this.log(`post success`)),
			catchError(this.handleError)
		);
	}



	public snackErr(msg: any, durationInSeconds: number = 5000) {
		this._snackBar.open( msg, 'close', {
			duration: durationInSeconds
		})
	}

	private handleError(error: any) {
		let errorMessage: string = '';
		if ( error.error instanceof ErrorEvent ) {
			// get client-side error
			errorMessage = error.error.message;
		} else {
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		return throwError( errorMessage );
	}

	private log(message: string) {
		console.log(message)
	}
}
