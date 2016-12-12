import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent }    from '../core/core.component';
import { HomeComponent }    from '../home/home.component';
import { DemoFormModule }    from '../demo-form/demo-form.module';
import { DemoFormComponent }    from '../demo-form/demo-form.component';

const coreRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'demo-form',
        component: DemoFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  declarations: [
  	CoreComponent,
    HomeComponent
    // DemoFormComponent
  ],
  exports: [
    RouterModule,
    DemoFormModule
  ]
})
export class CoreRoutingModule { }

