import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { AlertModule } from '../alert/alert.module';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  declarations: [LoginComponent, DashboardComponent, RegisterComponent]
})
export class CoreModule { }
