import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'edit/:id', component: EditComponent},
    { path: 'products/new', component: CreateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
