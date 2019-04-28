import { Routes, RouterModule }  from '@angular/router';

import { CustomizeComponent} from '../customize/customize.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CustomizeComponent
  }
];

export const routing = RouterModule.forChild(routes);
