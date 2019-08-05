import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.material.module';
import { AppRoutingModule } from "./app.routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor, ErrorInterceptor, LoaderInterceptor } from './helpers';
import { AuthenticationService } from './services/authentication.service';
import { ConfigurationService } from './services/config.service';
import { AlertComponent } from './directives/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import { LinkMenuComponent } from './link-menu/link-menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ProductService} from './services/product.service';
import { SubscribeService } from './services/subscribe.service';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PubSubService} from './services/pup-sub.service';
import { UserService } from './services/user.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './services/loader.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    LinkMenuComponent,
    SubscribeComponent,
    UserMenuComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    ConfigurationService,
    ProductService,
    PubSubService,
    SubscribeService,
    UserService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
