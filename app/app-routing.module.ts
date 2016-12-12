import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { CanDeactivateGuard } from './can-deactivate-guard.service';
// import { AuthGuard }          from './auth-guard.service';
// import { PreloadSelectedModules } from './selective-preload-strategy';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  // providers: [
  //   CanDeactivateGuard,
  //   PreloadSelectedModules
  // ]
})
export class AppRoutingModule {}
