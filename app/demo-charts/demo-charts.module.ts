import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';

import { DemoChartsComponent }         from './demo-charts.component';
// import { ChartsModule } from '../../node_modules/ng2-charts/ng2-charts';
import { ChartModule } from 'angular2-highcharts';

@NgModule({
  imports: [ BrowserModule, ChartModule ],
  declarations: [ DemoChartsComponent ],
  bootstrap: [ DemoChartsComponent ]
})

export class DemoChartsModule {
  constructor() {
  }
}
