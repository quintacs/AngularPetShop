import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/compartilhado/compartilhado/components/error-dialog/error-dialog.component';
import { MessageDialogComponent } from 'src/app/compartilhado/compartilhado/components/message-dialog/message-dialog.component';

import { ClienteModel } from '../modelo/cliente-model';
import { ClienteService } from '../services/cliente-service.service';
import { ClienteModelRequest } from './../modelo/cliente-model';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.scss']
})
export class UpdateClienteComponent implements OnInit {

  clienteModel :ClienteModel = {
    id: 0,
    nome: '',
    cpf: '',
    endereco: '',
    telefone: '',
    celular: '',
    email: ''
  }

  clienteRequest : ClienteModelRequest = {
    nome: '',
    cpf: '',
    endereco: '',
    telefone: '',
    celular: '',
    email: ''
  }
  constructor(private clienteService:ClienteService, public dialog: MatDialog,
              private rotaAtiva:ActivatedRoute, private rota:Router) { }

  ngOnInit(): void {
     const id = this.rotaAtiva.snapshot.paramMap.get('id')+'';
    this.clienteService.consultar(id).subscribe(
        cliente => this.clienteModel = cliente
    );
  }

  editar(){

    this.clienteService.atualizar(this.clienteModel).pipe(
      catchError(error => {
        this.onError('Erro ao editar clientes \n '+JSON.stringify(error));
          return of([])
      }
      )).subscribe( () => {
            this.onMessage('Cliente atualizado com sucesso.');
            this.rota.navigate(['/Clientes']);
          });

  }

  cancelar(){

    this.rota.navigate(['/Clientes']);
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
