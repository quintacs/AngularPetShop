import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';
import { AgendaModel } from '../modelo/agenda-modelo';

@Injectable({
  providedIn: 'root'
})
export class AgendaServiceService {

  private readonly API = '/api/Agendamentos';
  private api = '';

  constructor(private httpClient:HttpClient) { }

  list(){
      return this.httpClient.get<AgendaModel[]>(this.API)
        .pipe(
          first(),
          delay(2000),
          tap(resultado => console.log(resultado))
        );
  }

  salvar(agendaModel:AgendaModel):Observable<AgendaModel>{

    return this.httpClient.post<AgendaModel>(this.API , agendaModel);

  }

  consultar(id: string):Observable<AgendaModel>{

      return this.httpClient.get<AgendaModel>(this.API);

  }

  atualizar(agendaModel:AgendaModel):Observable<AgendaModel>{

    this.api = this.API+'/'+agendaModel.id;
    //alert('update: '+clienteModel.id);
    return this.httpClient.put<AgendaModel>(this.api , agendaModel);

  }

  delete(id:string):Observable<unknown>{

    this.api = this.API+'/'+id;
    return this.httpClient.delete<unknown>(this.api);

  }

}
