import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateDealComponent } from './create-deal/create-deal.component';
import { DealHistoryComponent } from './deal-history/deal-history.component';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { DealsearchComponent } from './dealsearch/dealsearch.component';
import { DealOfferComponent } from './deal-offer/deal-offer.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { UserTypeGuard } from './guards/userType.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'deal-create', component: CreateDealComponent, canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'deal-history', component: DealHistoryComponent, canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'deal-detail/:id', component: DealDetailComponent, canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'deal-search', component: DealsearchComponent, canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'deal-offer', component: DealOfferComponent, canActivate: [AuthGuard, UserTypeGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
