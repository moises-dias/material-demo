import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule, MatCardModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';


const material =[
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }


