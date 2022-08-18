import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-component',
  templateUrl: './agenda-component.component.html',
  styleUrls: ['./agenda-component.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    {titulo: 'titulo 1', conteudo:'conteudo 1'},
    {titulo: 'titulo 2', conteudo:'conteudo 2'},
    {titulo: 'titulo 3', conteudo:'conteudo 3'},
    {titulo: 'titulo 4', conteudo:'conteudo 4'},
    {titulo: 'titulo 5', conteudo:'conteudo 5'},
    {titulo: 'titulo 6', conteudo:'conteudo 6'}

  ];

}
