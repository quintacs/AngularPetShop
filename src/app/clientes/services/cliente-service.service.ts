import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { ClienteModel } from './../modelo/cliente-model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //private httpClient:HttpClient;
  private readonly API1 = 'http://192.168.0.11:8080/Clientes';

  private readonly API2 = '/api/Clientes';

  private api = '';

  constructor(private httpClient:HttpClient) {
    //this.httpClient = httpClient;
  }

  list(){

   return this.httpClient.get<ClienteModel[]>(this.API2)
      .pipe(
        first(),
        delay(2000),
        tap(resultado => console.log(resultado))
        );
  }

  salvar(clienteModel:ClienteModel):Observable<ClienteModel>{

    return this.httpClient.post<ClienteModel>(this.API2 , clienteModel);

  }

  consultar(id: string):Observable<ClienteModel>{

      this.api = this.API2+'/'+id;
      return this.httpClient.get<ClienteModel>(this.api);

  }

  atualizar(clienteModel:ClienteModel):Observable<ClienteModel>{

    this.api = this.API2+'/'+clienteModel.id;
    //alert('update: '+clienteModel.id);
    return this.httpClient.put<ClienteModel>(this.api , clienteModel);

  }

  delete(id:string):Observable<unknown>{

    this.api = this.API2+'/'+id;
    return this.httpClient.delete<unknown>(this.api);

  }



  /*list():ClienteModel[]{
    return [
      {id:1,nome:'usuario teste',cpf:'12345678-90',endereco:'rua do paraiso',telefone:'8888-8888',celular:'9999-9999',email:'teste@tewste.com'}
    ];
  }*/
}
