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

  ngOnInit() {
    // Mensaje de bienvenida
    this.messages.push({ content: '¡Hola! ¿En qué puedo ayudarte?', sender: 'bot' });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ content: this.newMessage, sender: 'user' });
      
      // Simular respuesta del bot
      setTimeout(() => {
        this.messages.push({ content: `Has dicho: "${this.newMessage}". ¿En qué más puedo ayudarte?`, sender: 'bot' });
      }, 1000);

      this.newMessage = '';
    }
  }
}