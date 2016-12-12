import { Component } from '@angular/core';

import { QuestionService } from '../dynamic-forms/question.service';

@Component({
    templateUrl: 'templates/form_edit.html',
    providers: [ QuestionService ]
})
export class DemoFormComponent {
    page_name = 'Angular Form';

    questions: any[];
    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }
}
