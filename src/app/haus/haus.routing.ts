import { Routes, RouterModule }  from '@angular/router';

import { HausComponent} from '../haus/haus.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: HausComponent
  }
];

export const routing = RouterModule.forChild(routes);
