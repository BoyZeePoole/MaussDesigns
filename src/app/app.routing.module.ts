import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
  
 { path: 'home', component:  HomeComponent,
    children: [
      { path: 'splash', loadChildren: './splash/splash.module#SplashModule'},
      { path: 'products', loadChildren: './products/products.module#ProductsModule'},
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule'},
      { path: 'customize', loadChildren: './customize/customize.module#CustomizeModule', canActivate: [AuthGuard] },
      { path: 'clientprofile', loadChildren: './client-profile/client-profile.module#ClientProfileModule'},
      { path: 'registerlogin', loadChildren: './login-register-container/login-register-container.module#LoginRegisterContainerModule'},
      { path: 'shop', loadChildren: './shop/shop.module#ShopModule'},
      { path: 'productdetail/:refId', loadChildren: './product-detail/product-detail.module#ProductDetailModule'}
    ]
  },
  // {path: 'home/:refId', component: HomeComponent,
  //   children: [
  //     { path: 'products', loadChildren: './products/products.module#ProductsModule'},
  //     { path: 'dasboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  //     { path: 'clientprofile', loadChildren: './client-profile/client-profile.module#ClientProfileModule'},
  //     { path: 'registerlogin', loadChildren: './login-register-container/login-register-container.module#LoginRegisterContainerModule'},
  //     { path: 'shop', loadChildren: './shop/shop.module#ShopModule'},
  //     { path: 'productdetail/:refId', loadChildren: './product-detail/product-detail.module#ProductDetailModule'}
  //   ]
  // },
{ path: '', redirectTo: 'home/splash', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}