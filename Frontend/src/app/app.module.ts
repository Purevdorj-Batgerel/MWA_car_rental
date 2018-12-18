
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateDealComponent } from './create-deal/create-deal.component';
import { DealHistoryComponent } from './deal-history/deal-history.component';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { DealsearchComponent } from './dealsearch/dealsearch.component';
import { DealOfferComponent } from './deal-offer/deal-offer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { HttpService } from './services/http.service';

import { reducers } from './reducers';
import { AuthGuard } from './guards/auth.guard';
import { UserTypeGuard } from './guards/userType.guard';
import { TokenInterceptor } from './services/token.interceptor';
import { TestComponent } from './test/test.component';
import { DealOfferHisComponent } from './deal-offer-his/deal-offer-his.component';

import { DealLazyModule } from './lazy/DealLazy.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateDealComponent,
    DealHistoryComponent,
    DealDetailComponent,
    DealsearchComponent,
    DealOfferComponent,
    LoginComponent,
    LogoutComponent,
    TestComponent,
    DealOfferHisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10, // Retains last 25 states
    })
  ],
  providers: [
    HttpService,
    AuthGuard,
    UserTypeGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
