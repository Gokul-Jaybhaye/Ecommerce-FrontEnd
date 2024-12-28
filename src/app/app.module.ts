import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './Header/top-menu/top-menu.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SearchComponent } from './productlist/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductInfoComponent } from './productlist/product-info/product-info.component';
import { ProductComponent } from './productlist/product-info/product/product.component';
import { FilterComponent } from './productlist/product-info/filter/filter.component';
import { ProductDetailComponent } from './productlist/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    ProductlistComponent,
    SearchComponent,
    ProductInfoComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
