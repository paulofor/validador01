import { Component, OnInit } from '@angular/core';
import { DiaSemana, ProcessoNegocio, Semana } from 'src/app/shared/sdk';
import { Input } from '@angular/core';

@Component({
  selector: 'app-plano-semana-por-contexto',
  templateUrl: './plano-semana-por-contexto.component.html',
  styleUrls: ['./plano-semana-por-contexto.component.scss']
})
export class PlanoSemanaPorContextoComponent implements OnInit {

  listaDiaSemana : DiaSemana[];
  processoComPlano : ProcessoNegocio[];

  @Input() contexto : string;
  @Input() semana : Semana;
  

  constructor() { }

  ngOnInit() {
  }

}
