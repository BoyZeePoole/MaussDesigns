import { Routes, RouterModule }  from '@angular/router';

import { DashboardComponent} from '../dashboard/dashboard.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

export const routing = RouterModule.forChild(routes);
