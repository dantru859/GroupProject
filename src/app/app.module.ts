import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ChartsModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GraphComponent } from './graph/graph.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { InfoTableComponent } from './info-table/info-table.component';
import { ProductInputComponent } from './product-input/product-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { ImgChooserComponent } from './img-chooser/img-chooser.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import { FeeCalculatorComponent } from './fee-calculator/fee-calculator.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    GraphComponent,
    TransactionsComponent,
    InfoTableComponent,
    ProductInputComponent,
    ImgChooserComponent,
    FooterComponent,
    HeaderComponent,
    FeeCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    WavesModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    NavbarModule,
    MatToolbarModule,
    NgApexchartsModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
