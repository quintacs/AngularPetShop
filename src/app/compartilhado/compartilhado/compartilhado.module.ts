import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MaterialCssModule } from '../../compartilhado/material-css/material-css.module';
import { CategoriaPipe } from '../pipes/categoria.pipe';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoriaPipe,
    MessageDialogComponent

  ],
  imports: [
    CommonModule,
    MaterialCssModule
  ],
  exports:[
    ErrorDialogComponent,
    CategoriaPipe,
    MessageDialogComponent
  ]
})
export class CompartilhadoModule { }
