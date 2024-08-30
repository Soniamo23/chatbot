import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent {
  chatVisible: boolean = false;

  toggleChat() {
    this.chatVisible = !this.chatVisible;
  }
}
