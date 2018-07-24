import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AuthModule } from '@app/auth/auth.module';
import { AppRouterModule } from '@app/app.router.module';
import { DashboardModule } from '@app/dashboard/dashboard.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    AuthModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
