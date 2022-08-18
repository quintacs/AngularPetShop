import { ClienteModel } from './../../clientes/modelo/cliente-model';
import { Component, OnInit, Pipe } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/compartilhado/compartilhado/components/error-dialog/error-dialog.component';

import { PetModel, PetModelRequest } from './../modelo/PetModel';
import { PetService } from './../services/pet.service';
import { MessageDialogComponent } from 'src/app/compartilhado/compartilhado/components/message-dialog/message-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  petModel: PetModel = {
    id:0,
    //idCliente: 0,
    nomeCliente:'',
    nome:'',
    especie: ''
  };

  petModelRequest:PetModelRequest = {
    idCliente: 0,
    nome: '',
    especie: '',
  };

  idTemp:number = 0;

  clienteModel$: Observable<ClienteModel[]> ;

  constructor(private petService:PetService, public dialog: MatDialog,private rota:Router) {

    this.clienteModel$ = petService.listClientes().pipe(
      catchError(error => {
        this.onError('Erro ao carregar lista de Clientes');
          return of([])
      }
      )
    );
  }

  onError(errorMsg :string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onChangeObj(id:number): void{
    //this.onError("Id do cliente "+id);
    this.petModel.id = id;
    this.petModelRequest.idCliente = id;
    this.idTemp = id;
  }

  onMessage(errorMsg :string) {
    this.dialog.open(MessageDialogComponent, {
      data: errorMsg
    });
  }

  salvar(){

    //this.onError("Id do cliente "+this.petModelRequest.idCliente )
    this.petModelRequest.idCliente = this.idTemp;


    if(this.petModelRequest.idCliente != 0)
      this.petService.salvar(this.petModelRequest).pipe(
        catchError(error => {
          this.onError('Erro ao carregar lista de clientes \n '+error);
            return of([])
        }
        )).subscribe( message => {
                          this.onMessage('Pet salvo com sucesso \n '+JSON.stringify(message))
                          this.rota.navigate(['/Pets']);
                        });
      else
      this.onError("Id do cliente não encontrado ");
  }

  cancelar(){

    this.rota.navigate(['/Pets']);
  }

}
