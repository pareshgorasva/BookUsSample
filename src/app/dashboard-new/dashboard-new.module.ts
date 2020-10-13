import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardNewComponent } from "./dashboard-new.component";
import { RouterModule } from "@angular/router";
import { ProgressBarModule } from "../shared-component/progress-bar/progress-bar.module";
import { MatButtonModule, MatMenuModule, MatSidenavModule,MatIconModule,MatListModule,MatCardModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { MatDatepickerModule,MatNativeDateModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';

const routes = [
  
    {
      path: '',
      component: DashboardNewComponent, // base template component
    }
  
  ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        ProgressBarModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatPaginatorModule
    ],
    declarations: [
        DashboardNewComponent
    ],
    exports: [
        DashboardNewComponent
    ]
})

export class DashboardNewModule {}