import { Routes, RouterModule }  from '@angular/router';

import {AccountDetailComponent} from './account-detail.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AccountDetailComponent
  }
];

export const routing = RouterModule.forChild(routes);