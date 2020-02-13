import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

const MaterialComponents =[
  MatButtonModule,
  MatIconModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

// mat-typography
// mat-caption
// mat-body-1~2
// mat-subheading-1~2
// mat-title
// mat-headline
// mat-display1~4
