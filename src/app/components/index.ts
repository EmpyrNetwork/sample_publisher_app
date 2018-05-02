import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AccordionModule, BsDropdownModule, TooltipModule } from 'ngx-bootstrap';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchResultsComponent } from './search-results/results.component';
import { CardFormComponent } from './card-form/card-form.component';
import { HeaderComponent } from './header/header.component';

export const COMPONENTS = [
  SimpleModalComponent,
  SearchbarComponent,
  SearchResultsComponent,
  CardFormComponent,
  HeaderComponent

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
/* istanbul ignore next */
export class ComponentsModule { }
