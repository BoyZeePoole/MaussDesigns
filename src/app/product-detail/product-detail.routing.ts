import { Routes, RouterModule }  from '@angular/router';

import { ProductDetailComponent} from '../product-detail/product-detail.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ProductDetailComponent
  }
];

export const routing = RouterModule.forChild(routes);
