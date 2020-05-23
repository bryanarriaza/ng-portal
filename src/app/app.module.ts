import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {routing} from './app.routing';
import {MaterialModule} from './material/material.module';
import {SharedModule} from './shared/shared.module';
import {PersonsclassComponent} from './personsclass/personsclass.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsclassComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
