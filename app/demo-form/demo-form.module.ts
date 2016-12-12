import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { DemoFormComponent }         from './demo-form.component';
import { DynamicFormComponent }         from '../dynamic-forms/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../dynamic-forms/dynamic-form-question.component';


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ DemoFormComponent, DynamicFormComponent, DynamicFormQuestionComponent ],
  bootstrap: [ DemoFormComponent ]
})

export class DemoFormModule {
  constructor() {
  }
}
