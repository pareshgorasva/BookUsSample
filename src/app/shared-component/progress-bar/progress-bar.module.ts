import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProgressBarComponent } from "./progress-bar.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ProgressBarComponent
    ],
    exports: [
        ProgressBarComponent
    ]
})

export class ProgressBarModule {}