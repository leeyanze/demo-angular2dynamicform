import { Component } from '@angular/core';

@Component({
	template: `
            <chart [options]="options" 
            	(load)="saveInstance($event.context)"></chart>
		`
})
export class DemoChartsComponent {
	chart: any;
	options: any;
	series_data: any;
	constructor() {
		this.series_data = [2,3,5,8,13]
        this.options = {
          chart: { type: 'spline' },
          title: { text : 'dynamic data example'},
          series: [{ data: this.series_data }]
        };
        setInterval(() => {
        	this.series_data.push(Math.random() * 10)
        	console.log(this.series_data);
        }, 1000);
    }
    saveInstance(chartInstance:any) {
        this.chart = chartInstance;
    }
}
