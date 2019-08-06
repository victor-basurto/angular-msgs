import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WebService } from '../../web.service';

import { MessageModel } from '../messageModel';

@Component({
	selector: 'app-message-by-user',
	templateUrl: './message-by-user.component.html',
	styleUrls: ['./message-by-user.component.scss']
})
export class MessageByUserComponent implements OnInit {
	listOfMessages$: Observable<MessageModel[]>;
	constructor(private webService: WebService, private route: ActivatedRoute) { }

	ngOnInit() {
		const name = this.route.snapshot.params.name;
		this.listOfMessages$ = this.webService.getMessagesByName(name);
	}
}
