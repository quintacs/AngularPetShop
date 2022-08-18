import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CompartilhadoModule } from './../compartilhado/compartilhado/compartilhado.module';
import { MaterialCssModule } from './../compartilhado/material-css/material-css.module';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';
import { DeleteClienteComponent } from './delete-cliente/delete-cliente.component';



@NgModule({
  declarations: [
    ClienteComponent,
    CreateClienteComponent,
    UpdateClienteComponent,
    DeleteClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialCssModule,
    CompartilhadoModule,
    FormsModule

  ],
  exports:[
    ClienteComponent,
    CreateClienteComponent,
    UpdateClienteComponent,
    DeleteClienteComponent
  ]
})
export class ClientesModule { }
