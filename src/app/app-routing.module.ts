import { TenisMizunoComponent } from './tenis-mizuno/tenis-mizuno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TenisAdidasComponent } from './tenis-adidas/tenis-adidas.component';
import { TenisNikeComponent } from './tenis-nike/tenis-nike.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'tenis-nike', component: TenisNikeComponent},
  {path: 'tenis-adidas', component: TenisAdidasComponent},
  {path: 'tenis-mizuno', component: TenisMizunoComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
