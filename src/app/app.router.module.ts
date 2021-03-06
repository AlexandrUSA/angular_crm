import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRouterModule { }
