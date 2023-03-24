import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ClienteModel } from 'src/app/clientes/modelo/cliente-model';
import { ErrorDialogComponent } from 'src/app/compartilhado/compartilhado/components/error-dialog/error-dialog.component';
import {
  MessageDialogComponent,
} from 'src/app/compartilhado/compartilhado/components/message-dialog/message-dialog.component';

import { PetModel, PetModelRequest } from '../modelo/PetModel';
import { PetService } from './../services/pet.service';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss']
})
export class UpdatePetComponent implements OnInit {

  petModel:PetModel = {
    id:0,
    idCliente:0,
    nomeCliente:'',
    nome:'',
    especie:'',
    raca:''
  }


  petRequest: PetModelRequest= {
    id:0,
    idCliente:0,
    nome:'',
    especie:'',
    raca:''
  }

  clienteModel:ClienteModel = {
    id:0,
    nome:'',
    cpf:'',
    endereco:'',
    telefone:'',
    celular:'',
    email:''
 }



  clienteModel$: Observable<ClienteModel[]> | undefined ;

  idTemp:number = 0;
  selectCliente:string = '';
  id:string = '';

  constructor(private petService:PetService, public dialog: MatDialog,
    private rotaAtiva:ActivatedRoute, private rota:Router) {

    }

  ngOnInit(): void {
    //const id = this.rotaAtiva.snapshot.paramMap.get('id')+'';
    this.id = this.rotaAtiva.snapshot.paramMap.get('id')+'';

     this.petService.consultar(this.id).subscribe(
              pet => {this.petModel = pet;
                        this.petRequest.nome = this.petModel.nome;
                        this.petRequest.especie = this.petModel.especie;
                        this.petRequest.id = this.petModel.id;
                        if(this.petModel.idCliente != null){
                            this.petRequest.idCliente = this.petModel.idCliente;
                          }
     });

    this.clienteModel$ = this.petService.listClientes().pipe(
        catchError(error => {
          this.onError('Erro ao carregar lista de Clientes');
            return of([]);
        })
      );


  }
  onChangeObj(id:number): void{
    //this.onError("Id do cliente "+id);
    this.petModel.id = id;
    this.petRequest.idCliente = id;
    this.idTemp = id;
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

loadPetRequest():void{
  this.petRequest.nome = this.petModel.nome;
  this.petRequest.especie = this.petModel.especie;
  this.petRequest.id = this.petModel.id;
  //this.petRequest.idCliente = ? ;
}


  alterar(){

    //this.onError("Id do cliente "+this.petModelRequest.idCliente )
    this.petRequest.idCliente = this.idTemp;

    if(this.petRequest.idCliente != 0)
      this.petService.atualizar(this.petRequest).pipe(
        catchError(error => {
          this.onError('Erro ao carregar lista de clientes \n '+error);
            return of([])
        }
        )).subscribe( message => this.onMessage('Mensagem \n '+message));
      else
      this.onError("Id do cliente não encontrado ");
  }

  cancelar(){

    this.rota.navigate(['/Pets']);
  }

}
