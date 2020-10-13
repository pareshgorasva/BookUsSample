import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatSidenavModule,MatIconModule,MatListModule,MatCardModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatProgressBar, MatProgressBarModule, MatTableModule } from '@angular/material';
import { MatDatepickerModule,MatNativeDateModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './_layout/left-panel/left-panel.component';
import { HomeComponent } from './_module/home/home.component';
import { SalesComponent } from './_module/home/sales/sales.component';
import { LineChartComponent } from './_graph/line-chart/line-chart.component';
import { PieChartComponent } from './_graph/pie-chart/pie-chart.component';
import { RevenuePieChartComponent } from './_graph/revenue-pie-chart/revenue-pie-chart.component';
import { ServicesPieChartComponent } from './_graph/services-pie-chart/services-pie-chart.component';
import { ProductsPieChartComponent } from './_graph/products-pie-chart/products-pie-chart.component';
import { PaymentMethodPieChartComponent } from './_graph/payment-method-pie-chart/payment-method-pie-chart.component';
import { ProfitPieChartComponent } from './_graph/profit-pie-chart/profit-pie-chart.component';
import { CustomerGenderComponent } from './components/customer-gender/customer-gender.component';
import { NewVsReturnComponent } from './components/new-vs-return/new-vs-return.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { ProfitComponent } from './components/profit/profit.component';
import { TopSpenderCustomerComponent } from './components/top-spender-customer/top-spender-customer.component';
import { AverageWaitingTimeComponent } from './components/average-waiting-time/average-waiting-time.component';
import { AppointmentLogComponent } from './components/appointment-log/appointment-log.component';
import { TopTherapistComponent } from './components/top-therapist/top-therapist.component';
import { TherapistRatingComponent } from './components/therapist-rating/therapist-rating.component';
import { OverallBusinessRatingComponent } from './components/overall-business-rating/overall-business-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    HomeComponent,
    SalesComponent,
    LineChartComponent,
    PieChartComponent,
    RevenuePieChartComponent,
    ServicesPieChartComponent,
    ProductsPieChartComponent,
    PaymentMethodPieChartComponent,
    ProfitPieChartComponent,
    CustomerGenderComponent,
    NewVsReturnComponent,
    PaymentMethodsComponent,
    ProfitComponent,
    TopSpenderCustomerComponent,
    AverageWaitingTimeComponent,
    AppointmentLogComponent,
    TopTherapistComponent,
    TherapistRatingComponent,
    OverallBusinessRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
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
    MatNativeDateModule,MatProgressBarModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
