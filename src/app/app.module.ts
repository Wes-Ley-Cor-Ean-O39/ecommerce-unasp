import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TenisNikeComponent } from './tenis-nike/tenis-nike.component';
import { TenisAdidasComponent } from './tenis-adidas/tenis-adidas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TenisMizunoComponent } from './tenis-mizuno/tenis-mizuno.component';
import { MenuComponent } from './menu/menu.component';
import { BreadcumpComponent } from './breadcump/breadcump.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TenisNikeComponent,
    TenisAdidasComponent,
    NotFoundComponent,
    TenisMizunoComponent,
    MenuComponent,
    BreadcumpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
