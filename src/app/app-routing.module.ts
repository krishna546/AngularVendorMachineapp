import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositcoinsComponent } from './depositcoins/depositcoins.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'products',component : ProductsComponent},
  {path:'depositcoins',component: DepositcoinsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
