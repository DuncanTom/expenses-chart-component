import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { SpendingsComponent } from './spendings/spendings.component';
import { ExpensesChartComponent } from './expenses-chart/expenses-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    SpendingsComponent,
    ExpensesChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
