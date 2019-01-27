import { Routes, RouterModule }  from '@angular/router';

import { HomeComponent} from '../home/home.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '',    component: HomeComponent},
  {path: 'home/:refId', component: HomeComponent}
];

export const routing = RouterModule.forChild(routes);
