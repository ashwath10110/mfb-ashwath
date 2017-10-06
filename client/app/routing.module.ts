import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { LeafyGreenVegetablesComponent } from './leafy-green-vegetables/leafy-green-vegetables.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

import { ExoticVegetablesComponent } from './exotic-vegetables/exotic-vegetables.component';
import { ItemsComponent } from './items/items.component';
// import { App1Component } from './leafy-green-vegetables/leafy-green-vegetables.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'exotic-vegetables', component: ExoticVegetablesComponent },
  { path: 'items', component: ItemsComponent },
  // { path: 'leafy-green-vegetables', component: App1Component },
  
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'leafy-green-vegetables', component: LeafyGreenVegetablesComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
