import { Component } from '@angular/core';

import { QuestionService } from '../dynamic-forms/question.service';

@Component({
	template: `
            <div class="well">
                <h1>Time Now</h1>
                <now format="'hh:mm:ss'"></now>
            </div>

		`
})
export class DemoTimeNowComponent {

}
