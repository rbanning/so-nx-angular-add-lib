import { Component, Input } from '@angular/core';

@Component({
  selector: 'simba-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input()
  quote?: string | null;
}
