import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AlertService } from './alert.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [AlertComponent],
  providers: [AlertService],
  exports: [AlertComponent]
})
export class AlertModule { }
