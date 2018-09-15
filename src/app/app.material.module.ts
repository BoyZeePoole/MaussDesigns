import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatToolbarModule, MatListModule, MatSidenavModule, MatMenuModule, MatIconModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatCardModule} from '@angular/material';


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
            MatSnackBarModule],
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
            MatSnackBarModule],
})
export class MaterialModule { }