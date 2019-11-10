import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatToolbarModule, MatListModule, MatSidenavModule, MatMenuModule, MatIconModule, MatSelectModule, MatOptionModule, MatDatepickerModule } from '@angular/material';
import { MatCardModule, MatGridListModule, MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatOptionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatOptionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
})
export class MaterialModule { }