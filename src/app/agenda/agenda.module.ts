import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda-component/agenda-component.component';
import { AgendaRoutingModule } from './agenda-routing.module';
import { FormsModule } from '@angular/forms';
import { CompartilhadoModule } from '../compartilhado/compartilhado/compartilhado.module';
import { MaterialCssModule } from '../compartilhado/material-css/material-css.module';



@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    MaterialCssModule,
    CompartilhadoModule,
    FormsModule
  ],
  exports:[
    AgendaComponent
  ]
})
export class AgendaModule { }
