import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/compartilhado/compartilhado/components/error-dialog/error-dialog.component';
import { AgendaModel } from '../modelo/agenda-modelo';
import { AgendaServiceService } from '../services/agenda-service.service';

@Component({
  selector: 'app-agenda-component',
  templateUrl: './agenda-component.component.html',
  styleUrls: ['./agenda-component.component.scss']
})
export class AgendaComponent implements OnInit {

  agendas$: Observable<AgendaModel[]>;

  constructor(private agendaService: AgendaServiceService, public dialog: MatDialog) {
    this.agendas$ = agendaService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar agendamentos \n' + error.text);
        return of([])
      })
    )
  }

  ngOnInit(): void {
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  cards = [
    { titulo: 'titulo 1', conteudo: 'conteudo 1' },
    { titulo: 'titulo 2', conteudo: 'conteudo 2' },
    { titulo: 'titulo 3', conteudo: 'conteudo 3' },
    { titulo: 'titulo 4', conteudo: 'conteudo 4' },
    { titulo: 'titulo 5', conteudo: 'conteudo 5' },
    { titulo: 'titulo 6', conteudo: 'conteudo 6' }

  ];

}
