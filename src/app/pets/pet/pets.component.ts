import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/compartilhado/compartilhado/components/error-dialog/error-dialog.component';

import { PetService } from '../services/pet.service';
import { PetModel } from './../modelo/PetModel';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets$: Observable<PetModel[]> ;

  constructor(petService:PetService, public dialog: MatDialog) {

    this.pets$ = petService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar lista de pets');
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

  displayedColumns=['nomeCliente','nome','especie','editar','excluir'];
}
