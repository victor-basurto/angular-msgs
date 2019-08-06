import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageByUserComponent } from './messages/message-by-user/message-by-user.component';

import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
	{
		path: 'messages',
		component: MessagesComponent,
	}, {
		path: 'messages/:name',
		component: MessageByUserComponent
	}, {
		path: 'register',
		component: RegisterComponent
	}

];
@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }