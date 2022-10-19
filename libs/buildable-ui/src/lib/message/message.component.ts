import { Component, Input } from '@angular/core';
//import { OptionalOfType } from '@simba/fancy-types';
import { Nullable } from '@simba/shared-types';

@Component({
  selector: 'simba-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input()
  quote: Nullable<string>;
  //quote: OptionalOfType<string> ;
  //quote?: string | null;
}

//NOTE: the input uses Nullable<T> from the non-buildable TS library
//      This will case a build error on the app.
//      If we use the OptionalOfType<T> type from the buildable TS library, 
//      the app will build without an error.