import { Component } from '@angular/core';

@Component({
	template: `
            <chart [options]="options" (load)="saveInstance($event.context)"></chart>
		`
})
export class DemoChartsComponent {
	constructor() {
        this.options = {
          chart: { type: 'spline' },
          title: { text : 'dynamic data example'}
          series: [{ data: [2,3,5,8,13] }]
        };
        setInterval(() => this.chart.series[0].addPoint(Math.random() * 10), 1000);
    }
    chart : HighchartsChartObject;
    options: HighchartsOptions;
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }
}
