import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MessageComponent]
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';
  typingSpeed = 90; 

  ngOnInit() {
   
    this.typeMessage('¡Hola! ¿En qué puedo ayudarte?', 'bot');
  }


  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ content: this.newMessage, sender: 'user' });

      setTimeout(() => {
        this.typeMessage(`Has dicho: "${this.newMessage}". ¿En qué más puedo ayudarte?`, 'bot');
      }, 1000);

      this.newMessage = ''; 
    }
  }
  typeMessage(fullMessage: string, sender: string) {
    let currentIndex = 0;
    let currentMessage = { content: '', sender: sender };
    this.messages.push(currentMessage);

    const interval = setInterval(() => {
      if (currentIndex < fullMessage.length) {
        currentMessage.content += fullMessage[currentIndex];
        currentIndex++;
      } else {
        clearInterval(interval); 
      }
    }, this.typingSpeed);
  }
}
