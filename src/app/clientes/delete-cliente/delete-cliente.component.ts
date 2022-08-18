import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import {
  MessageDialogComponent,
} from 'src/app/compartilhado/compartilhado/components/message-dialog/message-dialog.component';

import { ClienteModel } from '../modelo/cliente-model';
import { ClienteService } from './../services/cliente-service.service';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.scss']
})
export class DeleteClienteComponent implements OnInit {

  clienteModel :ClienteModel = {
    id: 0,
    nome: '',
    cpf: '',
    endereco: '',
    telefone: '',
    celular: '',
    email: ''
  }

  id:string = '';

  constructor( private clienteService:ClienteService,
              private rota:Router, private rotaAtiva:ActivatedRoute
              , public dialog: MatDialog) { }

  ngOnInit(): void {
    //const id = this.rotaAtiva.snapshot.paramMap.get('id')+'';
    this.id = this.rotaAtiva.snapshot.paramMap.get('id')+'';
    /*this.rotaAtiva.paramMap.pipe(
        switchMap(
            parametro => {
                this.id = parametro.get('id')+'';
              return of([]);
            }
        )
    );*/

    //alert('id : '+this.id);

    this.clienteService.consultar(this.id).subscribe(
        cliente => this.clienteModel = cliente
    );

  }
  excluir(){
      this.clienteService.delete(this.id).subscribe(()=> {
        this.onMessage('Cliente deletado com sucesso.');
        this.rota.navigate(['/Clientes']);
    });
  }
  cancelar(){

    this.rota.navigate(['/Clientes']);
  }

  onMessage(errorMsg :string) {
    this.dialog.open(MessageDialogComponent, {
      data: errorMsg
    });
  }
}
