import { Routes, RouterModule }  from '@angular/router';

import { SplashComponent} from '../splash/splash.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  }
];

export const routing = RouterModule.forChild(routes);