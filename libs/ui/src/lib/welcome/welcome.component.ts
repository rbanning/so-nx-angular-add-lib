import { Component, Input } from '@angular/core';

@Component({
  selector: 'simba-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent  {
  @Input()
  name?: string;
}
