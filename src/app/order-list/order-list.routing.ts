import { Routes, RouterModule }  from '@angular/router';

import { OrderListComponent } from './order-list.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  }
];

export const routing = RouterModule.forChild(routes);
