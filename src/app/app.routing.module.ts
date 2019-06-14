import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
  
 { path: 'home', component:  HomeComponent,
    children: [
      { path: 'splash', loadChildren: () => import('./splash/splash.module').then(m => m.SplashModule), data: {animation: 'Splash'}},
      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), data: {animation: 'Products'}},
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), data: {animation: 'Dashboard'}},
      { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule), data: {animation: 'Gallery'}},
      { path: 'customize', loadChildren: () => import('./customize/customize.module').then(m => m.CustomizeModule), canActivate: [AuthGuard], data: {animation: 'Customize'}},
      { path: 'clientprofile', loadChildren: () => import('./client-profile/client-profile.module').then(m => m.ClientProfileModule)},
      { path: 'registerlogin', loadChildren: () => import('./login-register-container/login-register-container.module').then(m => m.LoginRegisterContainerModule), data: {animation: 'Login'}},
      { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)},
      { path: 'productdetail/:refId', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule)},
      { path: 'accountdetail', loadChildren: () => import('./account-detail/account-detail.module').then(m => m.AccountDetailModule)},
    ]
  },
  
{ path: '', redirectTo: 'home/splash', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}