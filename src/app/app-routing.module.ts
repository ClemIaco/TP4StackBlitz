import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  //{ path: 'product-list', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
