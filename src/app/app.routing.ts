import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './messages/new-message/new-message.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
	{
		path: 'messages',
		component: MessagesComponent
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