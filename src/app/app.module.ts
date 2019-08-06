import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebService } from './web.service';
import { AppRoutingModule } from './app.routing';
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatIconModule,
	MatButtonModule,
	MatFormFieldModule,
	MatSidenavModule
} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './messages/new-message/new-message.component';
import { HeaderComponent } from './header/header.component';
import { MessageByUserComponent } from './messages/message-by-user/message-by-user.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
	declarations: [
		AppComponent,
		MessagesComponent,
		NewMessageComponent,
		HeaderComponent,
		MessageByUserComponent,
		RegisterComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		RouterModule,
		AppRoutingModule,
		MatInputModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatTableModule,
		MatIconModule,
		MatCheckboxModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatSnackBarModule
	],
	providers: [WebService],
	bootstrap: [AppComponent]
})
export class AppModule { }
