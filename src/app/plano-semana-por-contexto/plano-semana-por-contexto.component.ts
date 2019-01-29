import { Component, OnInit } from '@angular/core';
import { DiaSemana, ProcessoNegocio, Semana, ProcessoNegocioApi, PlanoExecucao } from '../shared/sdk';
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
  

  constructor(private srv: ProcessoNegocioApi) { }

  ngOnInit() {
    this.carregaProcesso();
  }

  carregaProcesso() {
    this.srv.ObtemComPlanoPorSemana(this.semana.id,1)
      .subscribe((resultado) => {
        this.processoComPlano = resultado;
        this.processoComPlano.map((processo:ProcessoNegocio)=> {
          if (processo.planoExecucaos.length==0) {
            processo.planoExecucaos.push(new PlanoExecucao()); // segunda
            processo.planoExecucaos.push(new PlanoExecucao()); // terca
            processo.planoExecucaos.push(new PlanoExecucao()); // quarta
            processo.planoExecucaos.push(new PlanoExecucao()); // quinta
            processo.planoExecucaos.push(new PlanoExecucao()); // sexta
            processo.planoExecucaos.push(new PlanoExecucao()); // sabado
            processo.planoExecucaos.push(new PlanoExecucao()); // domingo

          }
        })
      });
  }

}
