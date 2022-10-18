import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BuildableUiModule } from '@simba/buildable-ui';
import { UiModule } from '@simba/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, BuildableUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
