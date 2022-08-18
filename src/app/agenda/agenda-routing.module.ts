import { AgendaComponent } from './agenda-component/agenda-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'Agenda', component:AgendaComponent}/*,
  {path:'CreateCliente', component:CreateClienteComponent},
  {path:'UpdateCliente/:id', component:UpdateClienteComponent},
  {path:'DeleteCliente/:id',component:DeleteClienteComponent}*/

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AgendaRoutingModule { }
