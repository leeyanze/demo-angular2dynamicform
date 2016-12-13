import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent }    from '../core/core.component';
import { HomeComponent }    from '../home/home.component';
import { DemoFormModule }    from '../demo-form/demo-form.module';
import { DemoFormComponent }    from '../demo-form/demo-form.component';

import { DemoTimeNowModule }    from '../demo-timenow/demo-timenow.module';
import { DemoTimeNowComponent }    from '../demo-timenow/demo-timenow.component';

import { DemoChartsModule }    from '../demo-charts/demo-charts.module';
import { DemoChartsComponent }    from '../demo-charts/demo-charts.component';

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
      },
      {
        path: 'demo-timenow',
        component: DemoTimeNowComponent
      },
      {
        path: 'demo-charts',
        component: DemoChartsComponent
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
    DemoFormModule,
    DemoTimeNowModule,
    DemoChartsModule
  ]
})
export class CoreRoutingModule { }

