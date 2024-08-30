import { Component } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ChatComponent, CommonModule]
})
export class AppComponent {
  title = 'CHATBOT';
  isChatOpen = false;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;

    const chatBubble = document.getElementById('chat-bubble');
    const chatContainer = document.getElementById('chat-container');

    if (chatBubble && chatContainer) {
      if (this.isChatOpen) {
        chatBubble.classList.add('hidden');
        chatContainer.classList.add('active');
      } else {
        chatBubble.classList.remove('hidden');
        chatContainer.classList.remove('active');
      }
    }
  }

  minimizeChat() {
    this.isChatOpen = false;
    const chatBubble = document.getElementById('chat-bubble');
    const chatContainer = document.getElementById('chat-container');

    if (chatBubble && chatContainer) {
      chatBubble.classList.remove('hidden');
      chatContainer.classList.remove('active');
    }
  }

  closeChat() {
    this.isChatOpen = false;
    const chatBubble = document.getElementById('chat-bubble');
    const chatContainer = document.getElementById('chat-container');

    if (chatBubble && chatContainer) {
      chatBubble.classList.remove('hidden');
      chatContainer.classList.remove('active');
    }
  }
}
