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
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AuthenticationService } from './services/authentication.service';
import { ConfigurationService } from './services/config.service';
import { AlertComponent } from './directives/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import { LinkMenuComponent } from './link-menu/link-menu.component'
import { ProductService} from './services/product.service';
import { SubscribeService } from './services/subscribe.service';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
// import { FilterPipe } from './filter.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PubSubService} from './services/pup-sub.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    LinkMenuComponent,
    // DashboardComponent,
    SubscribeComponent,
    // FilterPipe,
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
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    ConfigurationService,
    ProductService,
    PubSubService,
    SubscribeService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
