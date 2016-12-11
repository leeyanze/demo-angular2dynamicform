import { Component } from '@angular/core';

import { QuestionService } from './dynamic-forms/question.service';

@Component({
	selector: 'my-app',
	templateUrl: 'templates/form_edit.html',
	providers: [ QuestionService ]
})
export class AppComponent {
	page_name = 'Angular Form';

	questions: any[];
	constructor(service: QuestionService) {
		this.questions = service.getQuestions();
	}
}
