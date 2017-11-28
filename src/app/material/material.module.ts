import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material';

const MAT_MODULES = [
  MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule
]

@NgModule({
  imports: [
    MAT_MODULES
  ],
  declarations: [],
  exports: [MAT_MODULES]
})
export class MaterialModule { }
