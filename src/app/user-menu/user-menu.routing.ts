import { Routes, RouterModule }  from '@angular/router';

import { UserMenuComponent} from './user-menu.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: UserMenuComponent
  }
];

export const routing = RouterModule.forChild(routes);
