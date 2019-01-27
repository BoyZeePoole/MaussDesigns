import { Routes, RouterModule }  from '@angular/router';

import { LoginRegisterContainerComponent} from '../login-register-container/login-register-container.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: LoginRegisterContainerComponent
  }
];

export const routing = RouterModule.forChild(routes);
