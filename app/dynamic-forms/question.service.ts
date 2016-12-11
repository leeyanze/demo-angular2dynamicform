import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { DropdownQuestion } from './question-dropdown';
import { RadioQuestion } from './question-radio';

@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'address',
        label: 'Address',
        required: true,
      }),
      new TextboxQuestion({
        key: 'fax_no',
        label: 'Fax No.',
        required: true,
      }),
      // new TextboxQuestion({
      //   key: 'do_business_as_name',
      //   label: 'First Do-business as Name',
      //   required: true,.',

      // }),
      // new TextboxQuestion({
      //   key: 'city',
      //   label: 'City',
      //   required: true,
      // }),
      // new TextboxQuestion({
      //   key: 'state',
      //   label: 'State',
      //   required: true,
      // }),
      // new TextboxQuestion({
      //   key: 'country',
      //   label: 'Country',
      //   required: true,
      // }),
      // new TextboxQuestion({
      //   key: 'post_code',
      //   label: 'First Post Code',
      //   required: true,
      // }),
      // new TextboxQuestion({
      //   key: 'telephone_no',
      //   label: 'First Telephone No.',
      //   required: true,
      // }),
      new DropdownQuestion({
        key: 'registered_address_same_as_physical_address',
        label: 'Registered address same as physical address?',
        options: [
          { key: '1', value: 'Yes' },
          { key: '0', value: 'No' },
        ],
        required: true,
      }),
      new RadioQuestion({
        key: 'gender',
        label: 'Gender',
        options: [
          { key: 'm', value: 'Male' },
          { key: 'f', value: 'Female' },
        ],
        required: true,
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
