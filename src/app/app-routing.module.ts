import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Ex88Component } from './ex88/ex88.component';
import { Ex88serviceComponent } from './ex88service-details/ex88service.component';
import { Ex90ServiceProductHttpComponent } from './ex90-service-product-http/ex90-service-product-http.component';

const routes: Routes = [
  {path:"dang-nhap",component:LoginComponent},
  {path:'service-product-image-event',
    component:Ex88Component},
  {path:'service-product-image-event/:id',
    component:Ex88serviceComponent},
  {path:"product-http", component: Ex90ServiceProductHttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
