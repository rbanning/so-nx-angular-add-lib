import { Component, Input } from '@angular/core';
import { Nullable } from '@simba/shared-types';

@Component({
  selector: 'simba-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input()
  quote: Nullable<string> //quote?: string | null;
}
