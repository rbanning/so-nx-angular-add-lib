import { Component, Input } from '@angular/core';
import { Nullable } from '@simba/shared-types';

@Component({
  selector: 'simba-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent  {
  @Input()
  name: Nullable<string>;
  
}
