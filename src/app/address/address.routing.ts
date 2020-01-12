import { Routes, RouterModule }  from '@angular/router';

import { AddressComponent} from '../address/address.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AddressComponent
  }
];

export const routing = RouterModule.forChild(routes);
