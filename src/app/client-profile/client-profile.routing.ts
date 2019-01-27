import { Routes, RouterModule }  from '@angular/router';

import {ClientProfileComponent} from '../client-profile/client-profile.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ClientProfileComponent
  }
];

export const routing = RouterModule.forChild(routes);