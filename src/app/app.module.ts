import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AlertModule } from './alert/alert.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    CoreModule,
    AppRoutingModule,
    AlertModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
