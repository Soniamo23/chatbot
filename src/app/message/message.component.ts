import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChatMessage {
  content: string;
  sender: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MessageComponent {
  @Input() message!: ChatMessage;
}
