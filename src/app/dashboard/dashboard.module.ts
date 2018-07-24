import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { SharedModule } from '@app/shared/shared.module';
import { DashboardRouterModule } from './dashboard.router.module';
// Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HistoryComponent } from './pages/history/history.component';
import { RecordsComponent } from './pages/records/records.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { BillComponent } from './pages/bill/bill.component';
import { HeaderComponent } from './pages/dashboard/components/header/header.component';
import { SidebarComponent } from './pages/dashboard/components/sidebar/sidebar.component';
import { BillCardComponent } from './pages/bill/components/bill-card/bill-card.component';
import { CurrencyCardComponent } from './pages/bill/components/currency-card/currency-card.component';

// Directives
import { DropdownDirective } from './shared/directives/dropdown.directive';

// Services
import { BillService } from './shared/services/bill/bill.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRouterModule
  ],
  declarations: [
    DashboardComponent,
    HistoryComponent,
    RecordsComponent,
    PlanningComponent,
    BillComponent,
    HeaderComponent,
    SidebarComponent,
    DropdownDirective,
    BillCardComponent,
    CurrencyCardComponent
  ],
  providers: [
    BillService
  ]
})

export class DashboardModule { }
