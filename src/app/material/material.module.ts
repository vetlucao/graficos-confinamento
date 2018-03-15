import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatSelectModule],

    exports: [MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatSelectModule],
})

export class MaterialModule { }
