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
import { MomentPipe } from '@app/dashboard/shared/pipes/moment.pipe';
import { AddEventComponent } from './pages/records/components/add-event/add-event.component';
import { AddCategoryComponent } from './pages/records/components/add-category/add-category.component';
import { EditCategoryComponent } from './pages/records/components/edit-category/edit-category.component';

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
    CurrencyCardComponent,
    MomentPipe,
    AddEventComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  providers: [
    BillService
  ]
})

export class DashboardModule { }
