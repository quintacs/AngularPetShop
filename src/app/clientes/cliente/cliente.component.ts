import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../compartilhado/compartilhado/components/error-dialog/error-dialog.component';
import { ClienteModel } from './../modelo/cliente-model';
import { ClienteService } from './../services/cliente-service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {


  clientes$: Observable<ClienteModel[]>;

  constructor(private clienteService:ClienteService, public dialog: MatDialog) {
    //this.clienteService = new ClienteService();
    //this.clienteService = clienteService;
    this.clientes$ = clienteService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar lista de clientes \n '+error.text);
          return of([])
      })
    )
  }

  onError(errorMsg :string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  displayedColumns=['nome','cpf','endereco','telefone','celular','email','editar','excluir'];


  ngOnInit(): void {
  }

}
