import {NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {PersonsComponent} from './persons/persons.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import localeGt from '@angular/common/locales/es-GT';
import {ADMINISTRATION_ROUTES} from './administration.routing';
import {MaterialModule} from '../../material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {PersonsService} from './persons/persons.service';

registerLocaleData(localeGt);

@NgModule({
  declarations: [
    PersonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ADMINISTRATION_ROUTES),
    MaterialModule,
  ],
  providers: [
    PersonsService
  ]
})

export class AdministrationModule {
}
