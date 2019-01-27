import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatToolbarModule, MatListModule, MatSidenavModule, MatMenuModule, MatIconModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatCardModule, MatGridListModule} from '@angular/material';

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
            MatGridListModule],
})
export class MaterialModule { }