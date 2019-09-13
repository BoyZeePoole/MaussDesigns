import { Routes, RouterModule }  from '@angular/router';

import { WishListComponent } from '../wish-list/wish-list.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: WishListComponent
  }
];

export const routing = RouterModule.forChild(routes);
