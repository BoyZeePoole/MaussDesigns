import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  
 { path: 'home', component:  HomeComponent,
    children: [
      { path: 'products', loadChildren: './products/products.module#ProductsModule'},
      { path: 'dasboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      { path: 'clientprofile', loadChildren: './client-profile/client-profile.module#ClientProfileModule'},
      { path: 'registerlogin', loadChildren: './login-register-container/login-register-container.module#LoginRegisterContainerModule'},
      { path: 'shop', loadChildren: './shop/shop.module#ShopModule'},
      { path: 'productdetail/:refId', loadChildren: './product-detail/product-detail.module#ProductDetailModule'}
    ]
  },
  {path: 'home/:refId', component: HomeComponent,
    children: [
      { path: 'products', loadChildren: './products/products.module#ProductsModule'},
      { path: 'dasboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      { path: 'clientprofile', loadChildren: './client-profile/client-profile.module#ClientProfileModule'},
      { path: 'registerlogin', loadChildren: './login-register-container/login-register-container.module#LoginRegisterContainerModule'},
      { path: 'shop', loadChildren: './shop/shop.module#ShopModule'},
      { path: 'productdetail/:refId', loadChildren: './product-detail/product-detail.module#ProductDetailModule'}
    ]
  },
{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}