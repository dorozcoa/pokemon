import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule,
  MatCheckboxModule, MatBadgeModule, MatDividerModule, MatGridListModule, MatAutocompleteModule,
  MatTooltipModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatDividerModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatDividerModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatTooltipModule
  ]
})

export class MaterialModule { }
