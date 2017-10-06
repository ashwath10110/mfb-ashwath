import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { ExoticVegetablesService } from './services/exotic-vegetables.service';
import { ItemsService } from './services/items.service';
import { UserService } from './services/user.service';
import { AppService } from './app.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ExoticVegetablesComponent } from './exotic-vegetables/exotic-vegetables.component';
import { ItemsComponent } from './items/items.component';
import { LeafyGreenVegetablesComponent } from './leafy-green-vegetables/leafy-green-vegetables.component';

// import { App1Component } from './leafy-green-vegetables/app.component';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { CarousalComponent } from './carousal/carousal.component';
import { CheckoutComponent } from './checkout/checkout.component';


import { SearchBarComponent } from './leafy-green-vegetables/search-bar/search-bar.component';
import { FiltersComponent } from './leafy-green-vegetables/filters/filters.component';
import { ShowcaseComponent } from './leafy-green-vegetables/showcase/showcase.component';
import { CartComponent } from './leafy-green-vegetables/cart/cart.component';
import { ProductComponent } from './leafy-green-vegetables/product/product.component';
import { ProductThumbnailComponent } from './leafy-green-vegetables/product-thumbnail/product-thumbnail.component';
import { CartPreviewComponent } from './leafy-green-vegetables/cart-preview/cart-preview.component';
import { DataShellComponent } from './leafy-green-vegetables/data-shell/data-shell.component';
import { SortFiltersComponent } from './leafy-green-vegetables/sort-filters/sort-filters.component';

import { DataService } from './leafy-green-vegetables/data.service';
import { CartService } from './leafy-green-vegetables/cart.service';
import { UrlFormComponent } from './leafy-green-vegetables/url-form/url-form.component';



// import { AppModule1 } from './leafy-green-vegetables/app.module';

// import { DataService } from './leafy-green-vegetables/data.service';
// import { CartService } from './leafy-green-vegetables/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    ExoticVegetablesComponent,
    TabsComponent,
    NavbarComponent,
    LeafyGreenVegetablesComponent,
    SearchBarComponent,
    FiltersComponent,
    ShowcaseComponent,
    CartComponent,
    ProductComponent,
    ProductThumbnailComponent,
    CartPreviewComponent,
    DataShellComponent,
    SortFiltersComponent,
    UrlFormComponent,
    CheckoutComponent,
    CarousalComponent,
    HomeComponent,
    ItemsComponent
    // App1Component
  ],
  imports: [
    RoutingModule,
    SharedModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    // AppModule1
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    ExoticVegetablesService,
    UserService,
    AppService,
    DataService,
    CartService,
    ItemsService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
