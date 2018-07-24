import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth/auth.component';
import { AuthRouterModule } from '@app/auth/auth.router.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRouterModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
  ]
})
export class AuthModule { }
