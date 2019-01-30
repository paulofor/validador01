import { Component, OnInit } from '@angular/core';
import { DiaSemana, ProcessoNegocio, Semana, ProcessoNegocioApi, PlanoExecucao } from '../shared/sdk';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-plano-semana-por-contexto',
  templateUrl: './plano-semana-por-contexto.component.html',
  styleUrls: ['./plano-semana-por-contexto.component.scss']
})
export class PlanoSemanaPorContextoComponent implements OnInit {

  listaDiaSemana: DiaSemana[];
  processoComPlano: ProcessoNegocio[];

  @Input() contexto: string;
  @Input() semana: Semana;
  myControl = new FormControl();

  constructor(private srv: ProcessoNegocioApi) { }

  ngOnInit() {
    this.carregaProcesso();
  }

  carregaProcesso() {
    this.srv.ObtemComPlanoPorSemana(this.semana.id, 1)
      .subscribe((resultado) => {
        this.processoComPlano = resultado;
        this.processoComPlano.map((processo: ProcessoNegocio) => {
          if (processo.planoExecucaos.length == 0) {
            processo.planoExecucaos.push(new PlanoExecucao({ "processoNegocioId": processo.id, "tempoEstimadoStr": "00:00", "tempoEstimado": new Date(0), "diaSemanaId": 1 })); // segunda
            processo.planoExecucaos.push(new PlanoExecucao({ "processoNegocioId": processo.id, "tempoEstimadoStr": "00:00", "tempoEstimado": new Date(0), "diaSemanaId": 2 })); // terca
            processo.planoExecucaos.push(new PlanoExecucao({ "processoNegocioId": processo.id, "tempoEstimadoStr": "00:00", "tempoEstimado": new Date(0), "diaSemanaId": 3 })); // quarta
            processo.planoExecucaos.push(new PlanoExecucao({ "processoNegocioId": processo.id, "tempoEstimadoStr": "00:00" ,"tempoEstimado": new Date(0), "diaSemanaId": 4 })); // quinta
            processo.planoExecucaos.push(new PlanoExecucao({ "processoNegocioId": processo.id, "tempoEstimadoStr": "00:00" ,"tempoEstimado": new Date(0), "diaSemanaId": 5 })); // sexta
            processo.planoExecucaos.push(new PlanoExecucao({ "processoNegocioId": processo.id, "tempoEstimadoStr": "00:00", "tempoEstimado": new Date(0), "diaSemanaId": 6 })); // sabado
            processo.planoExecucaos.push(new PlanoExecucao({ "processoNegocioId": processo.id, "tempoEstimadoStr": "00:00", "tempoEstimado": new Date(0), "diaSemanaId": 7 })); // domingo

          }
        })
      });
  }

  onSubmit() {
    console.log("Lista:" , this.processoComPlano);
  }

  updateDate(evento, coluna : PlanoExecucao) {
    console.log('Evento:' , evento);
    coluna.tempoEstimado = evento;
  }
}
