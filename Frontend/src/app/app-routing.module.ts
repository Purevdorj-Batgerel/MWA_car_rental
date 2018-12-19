import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateDealComponent } from './create-deal/create-deal.component';
import { DealHistoryComponent } from './deal-history/deal-history.component';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { DealsearchComponent } from './dealsearch/dealsearch.component';
import { DealOfferComponent } from './deal-offer/deal-offer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuard } from './guards/auth.guard';
import { UserTypeGuard } from './guards/userType.guard';
import { DealOfferHisComponent } from './deal-offer-his/deal-offer-his.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'deal-create', component: CreateDealComponent, canActivate: [AuthGuard, UserTypeGuard] },
  // { path: 'deal-create', loadChildren: './lazy/DealLazy.module#DealLazyModule', canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'deal-history', component: DealHistoryComponent, canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'deal-detail/:id', component: DealDetailComponent, canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'deal-search', component: DealsearchComponent, canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'deal-offer-his', component: DealOfferHisComponent, canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'deal-offer', component: DealOfferComponent, canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
