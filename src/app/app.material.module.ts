import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatToolbarModule, MatListModule, MatSidenavModule, MatMenuModule, MatIconModule, MatSelectModule, MatOptionModule, MatDatepickerModule } from '@angular/material';
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
            MatDatepickerModule
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
            MatDatepickerModule
          ],
})
export class MaterialModule { }