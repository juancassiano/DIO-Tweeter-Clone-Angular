import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
	tweetMessage: string =""
	tweetMaxLength: number = 240
	tweetRemaining: number = this.tweetMaxLength

	constructor(private service: MessagesService){
	}

	sendTweet(){
		this.service.addMessage(this.tweetMessage)
		this.tweetMessage = ""
		this.tweetRemaining = this.tweetMaxLength
	}

	changeTweet(){
		this.tweetRemaining = this.tweetMaxLength - this.tweetMessage.length
	}
}
