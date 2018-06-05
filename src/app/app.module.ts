import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { AgmCoreModule } from '@agm/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AUTH_PROVIDER } from './services/authorization/auth.provider'
import { AppComponent } from './app.component';

import {
  LoginPageComponent,
  RegisterPageComponent,
  SearchPageComponent,
  SignupWithCardPageComponent,
  HostedSignupPageComponent
} from './containers';
import { ComponentsModule } from './components';

import { LoggedInGuard } from './guards/LoggedInGuard';

import { UserEffects } from './effects/user';
import { SearchEffects } from './effects/search';

import { UserService } from './services/user/user.service';
import { SearchService } from './services/search/search.service';

import { environment } from '../environments/environment';

import { routes } from './routes';
import { reducer } from './reducers';

const imports = [
  BrowserModule,
  AgmCoreModule.forRoot({
    apiKey: 'YOUR_API_KEY'
  }),
  RouterModule.forRoot(routes),
  FormsModule,
  HttpModule,
  BsDropdownModule.forRoot(),
  AccordionModule.forRoot(),
  TabsModule.forRoot(),
  TooltipModule.forRoot(),
  StoreModule.provideStore(reducer),
  ComponentsModule,
  EffectsModule.run(UserEffects),
  EffectsModule.run(SearchEffects),
  RouterStoreModule.connectRouter(),
  ...(environment.production ? [] : [ StoreDevtoolsModule.instrumentOnlyWithExtension({ maxAge: 5 }) ])
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SearchPageComponent,
    SignupWithCardPageComponent,
    HostedSignupPageComponent
  ],
  imports: imports,
  exports: [ RouterModule ],
  providers: [
    LoggedInGuard,
    AUTH_PROVIDER,
    UserService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
/* istanbul ignore next */
export class AppModule { }
