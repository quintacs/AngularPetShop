import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of, Subscription } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/compartilhado/compartilhado/components/error-dialog/error-dialog.component';
import { MessageDialogComponent } from 'src/app/compartilhado/compartilhado/components/message-dialog/message-dialog.component';

import { ClienteService } from '../services/cliente-service.service';
import { ClienteModel } from './../modelo/cliente-model';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss']
})
export class CreateClienteComponent implements OnInit {

  clienteModel :ClienteModel = {
    id: 0,
    nome: '',
    cpf: '',
    endereco: '',
    telefone: '',
    celular: '',
    email: ''
  }



  constructor(private clienteService:ClienteService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }


  salvar(){

    this.clienteService.salvar(this.clienteModel).pipe(
      catchError(error => {
        this.onError('Erro ao carregar lista de clientes \n '+error);
          return of([])
      }
      )).subscribe( message => this.onMessage('Mensagem \n '+JSON.stringify(message)))
  }


  onError(errorMsg :string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onMessage(errorMsg :string) {
    this.dialog.open(MessageDialogComponent, {
      data: errorMsg
    });
  }
}
