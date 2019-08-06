import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MessageModel } from './messages/messageModel';
const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

@Injectable({
	providedIn: 'root'
})
export class WebService {
	private MessageAPI_URL: string = 'http://localhost:50780/api';

	constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

	
	public getMessages(): Observable<MessageModel> {
		try {
			return this.http.get<MessageModel>(`${this.MessageAPI_URL}/messages`).pipe(
				tap(_ => this.log('fetched messages')),
				retry(1),
				catchError(this.handleError)
			)
		} catch (error) {
			this.log(`unable to get messages due to: \n${error}`);
		}
	}
	public getMessagesByName(name: string): Observable<MessageModel[]> {
		try {
			return this.http.get<MessageModel[]>(`${this.MessageAPI_URL}/messages/${name}`).pipe(
				tap(_ => this.log(`successfully fetched all messages from ${name}`)),
				retry(1),
				catchError(this.handleError)
			)
		} catch(error) {
			this.log(`unable to get messages due to: \n${error}`);
		}
	}
	public postMessage(msg):Observable<MessageModel> {
		let formvals = new HttpParams();
		Object.keys( msg ).forEach((i) => {
			formvals = formvals.set(i, msg[i])
		});

		return this.http.post<MessageModel>(`${this.MessageAPI_URL}/messages`, formvals.toString(), httpOptions).pipe(
			tap(_ => this.log(`post success`)),
			catchError(this.handleError)
		)
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

	public isEmptyObject(obj: {}): boolean {
		for (let key in obj) {
			if ( obj.hasOwnProperty(key) && obj[key] !== null ) {
				return false;
			}
		}
		return true;
	}

	private log(message: string) {
		console.log(message)
	}
}
