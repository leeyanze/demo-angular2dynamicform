import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';

import { DemoTimeNowComponent }         from './demo-timenow.component';
import { NowComponent } from './time_now.component'


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ DemoTimeNowComponent, NowComponent ],
  bootstrap: [ DemoTimeNowComponent ]
})

export class DemoTimeNowModule {
  constructor() {
  }
}
