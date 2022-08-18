import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path:'Home', component:HomeComponent },
  { path:'home', component:HomeComponent }/*,
  { path:'CreateCliente', component:CreateClienteComponent},
  {
    path: 'Clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
      path:'Pets',
      loadChildren:() => import('./pets/pets.module').then(m => m.PetsModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
