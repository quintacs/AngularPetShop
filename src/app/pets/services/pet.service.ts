import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { ClienteModel } from './../../clientes/modelo/cliente-model';
import { PetModel, PetModelRequest } from './../modelo/PetModel';

@Injectable({
  providedIn: 'root'
})
export class PetService {


  private readonly API = '/api/Pets';
  private readonly APIClientes = '/api/Clientes';
  private api = '';

  constructor(private httpClient:HttpClient) {
    //this.httpClient = httpClient;
  }

  list(){

   return this.httpClient.get<PetModel[]>(this.API)
      .pipe(
        first(),
        delay(2000),
        tap(resultado => console.log(resultado))
        );
  }

  listClientes(){
     return this.httpClient.get<ClienteModel[]>(this.APIClientes);
  }

  salvar(petModelRequest:PetModelRequest):Observable<PetModel>{

    return this.httpClient.post<PetModel>(this.API , petModelRequest);

  }

consultar(id: string):Observable<PetModel>{

    this.api = this.API+'/'+id;
    return this.httpClient.get<PetModel>(this.api);

}

atualizar(petModelRequest:PetModelRequest):Observable<PetModel>{

  this.api = this.API+'/'+petModelRequest.id;
  return this.httpClient.put<PetModel>(this.api , petModelRequest);

}

delete(id:string):Observable<unknown>{

  this.api = this.API+'/'+id;
  return this.httpClient.delete<unknown>(this.api);

}
}
