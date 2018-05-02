import { Routes } from '@angular/router';
import { LoggedInGuard } from './guards/LoggedInGuard';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { SearchPageComponent } from './containers/search-page/search-page.component';
import { SignupWithCardPageComponent } from './containers/signup-with-card-page/signup-with-card-page.component';
import { HostedSignupPageComponent } from './containers/hosted-signup-page/hosted-signup-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'signupWithCard', component: SignupWithCardPageComponent },
  { path: 'hostedSignup', component: HostedSignupPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
