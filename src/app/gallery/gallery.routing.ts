import { Routes, RouterModule }  from '@angular/router';

import { GalleryComponent} from '../gallery/gallery.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  }
];

export const routing = RouterModule.forChild(routes);
