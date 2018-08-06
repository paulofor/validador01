import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ProjetoMySql } from '../shared/sdk';


@Component({
  selector: 'app-lista-valor-por-projeto',
  templateUrl: './lista-valor-por-projeto.component.html',
  styleUrls: ['./lista-valor-por-projeto.component.scss']
})
export class ListaValorPorProjetoComponent implements OnInit {

  @Input() projeto: ProjetoMySql; 

  constructor() { }

  ngOnInit() {
  }

}
