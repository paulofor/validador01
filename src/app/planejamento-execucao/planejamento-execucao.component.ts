import { Component, OnInit } from '@angular/core';
import { Semana, SemanaApi } from '../shared/sdk';

@Component({
  selector: 'app-planejamento-execucao',
  templateUrl: './planejamento-execucao.component.html',
  styleUrls: ['./planejamento-execucao.component.scss']
})
export class PlanejamentoExecucaoComponent implements OnInit {

  semana : Semana;

  constructor(private srv: SemanaApi) { }

  ngOnInit() {
    this.carregaSemana();
  }


  carregaSemana() {
    this.srv.ObtemDeslocada(1)
      .subscribe((resultado) => {
        this.semana = resultado;
        console.log('Resultado: ' , resultado);
      })
  }
}
