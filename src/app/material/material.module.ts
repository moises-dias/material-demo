import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule } from '@angular/material';
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
  MatExpansionModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

// mat-typography
// mat-caption
// mat-body-1~2
// mat-subheading-1~2
// mat-title
// mat-headline
// mat-display1~4

// mat-button
// mat-raised-button
// mat-flat-button
// mat-stroked-button
// mat-icon-button
// mat-fab
// mat-mini-fab
// color=primary
// 6 variants and 3 colors
