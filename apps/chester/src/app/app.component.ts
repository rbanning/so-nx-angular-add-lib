import { Component } from '@angular/core';
import { Nullable } from '@simba/shared-types';

@Component({
  selector: 'simba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: Nullable<string>;
}
