import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
// import { AuthService }      from './auth.service';

@Component({
  template: `
    <div class="container">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button (click)="login()" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </div>
    `
})
export class LoginComponent {
  message: string;

  constructor(public router: Router) {
    this.setMessage();
  }

  setMessage() {
    // this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.router.navigate(['/home']);

  //   this.authService.login().subscribe(() => {
  //     this.setMessage();
  //     if (this.authService.isLoggedIn) {
  //       // Get the redirect URL from our auth service
  //       // If no redirect has been set, use the default
  //       let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

  //       // Set our navigation extras object
  //       // that passes on our global query params and fragment
  //       let navigationExtras: NavigationExtras = {
  //         preserveQueryParams: true,
  //         preserveFragment: true
  //       };

  //       // Redirect the user
  //       this.router.navigate([redirect], navigationExtras);
  //     }
  //   });
  }

  logout() {
    // this.authService.logout();
    this.setMessage();
  }
}
