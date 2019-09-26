import { Routes, RouterModule }  from '@angular/router';

import { OrderComponent } from '../order/order.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: OrderComponent
  }
];

export const routing = RouterModule.forChild(routes);
