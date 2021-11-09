import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
