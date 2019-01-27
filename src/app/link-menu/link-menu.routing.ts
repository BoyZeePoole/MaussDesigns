import { Routes, RouterModule }  from '@angular/router';

import { LinkMenuComponent} from './link-menu.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: LinkMenuComponent
  }
];

export const routing = RouterModule.forChild(routes);
