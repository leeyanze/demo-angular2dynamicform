//our root app component
import { Component, Attribute } from '@angular/core';

@Component({
	selector: 'now',
	template: `
      <h2>
      	{{ date }}
      </h2>
      <select (change)="changeTimezone($event)">
      	<option value='here'>Here</option>
      	<option value='utc'>UTC</option>
      </select>
    `
})
export class NowComponent {
	private date: any;
	private timezone:String;
	private format: String;

	constructor( @Attribute("format") format: String) {
		this.format = format;
		this.date = new Date();

		setInterval(() => {
			if (this.timezone == 'utc') {
				this.date = new Date().toUTCString();
			} else {
				this.date = new Date();
			}
		});
	}

	protected changeTimezone($event: any) {
		this.timezone = $event.target.value
	}

}