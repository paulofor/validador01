import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planejamento-execucao',
  templateUrl: './planejamento-execucao.component.html',
  styleUrls: ['./planejamento-execucao.component.scss']
})
export class PlanejamentoExecucaoComponent implements OnInit {

  semana : Semana;

  constructor(private srv: SemanaApi) { }

  ngOnInit() {
  }


  carregaSemana() {

  }
}
