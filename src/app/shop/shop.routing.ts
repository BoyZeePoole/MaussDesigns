import { Routes, RouterModule }  from '@angular/router';

import { ShopComponent} from '../shop/shop.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ShopComponent
  }
];

export const routing = RouterModule.forChild(routes);
