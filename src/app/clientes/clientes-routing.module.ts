import { DeleteClienteComponent } from './delete-cliente/delete-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';

const routes: Routes = [
  {path:'Clientes', component:ClienteComponent},
  {path:'CreateCliente', component:CreateClienteComponent},
  {path:'UpdateCliente/:id', component:UpdateClienteComponent},
  {path:'DeleteCliente/:id',component:DeleteClienteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientesRoutingModule { }

