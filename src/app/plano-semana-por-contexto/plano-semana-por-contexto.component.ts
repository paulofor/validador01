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

  somaDias: PlanoExecucao[];
  somaProcesso: PlanoExecucao[];

  @Input() contexto: string;
  @Input() semana: Semana;
  myControl = new FormControl();

  constructor(private srv: ProcessoNegocioApi) { }

  ngOnInit() {
    this.carregaProcesso();
  }

  carregaProcesso() {
    console.log('IdSemana: ' , this.semana.id);
    this.srv.ObtemComPlanoPorSemana(this.semana.id, 1)
      .subscribe((resultado) => {
        this.processoComPlano = resultado;
        console.log('Objeto Carregado:' ,  this.processoComPlano);
      });
  }

  calculaSoma() {
    this.processoComPlano.forEach((valor:ProcessoNegocio) => {
      var planoSoma: PlanoExecucao = new PlanoExecucao();
      valor.planoExecucaos.forEach((plano:PlanoExecucao) => {
        planoSoma.tempoEstimado.setDate(planoSoma.tempoEstimado.getDate() + plano.tempoEstimado.getDate());
      });
      this.somaProcesso.push(planoSoma);
      console.log('Processso: ', valor);
      console.log('Soma: ' , planoSoma);
    })
  }

  onSubmit() {
    console.log("Lista:" , this.processoComPlano);
    this.ajustaTempos();
  }

  updateDate(evento, coluna : PlanoExecucao) {
    console.log('Evento:' , evento);
    coluna.tempoEstimado = evento;
  }

  ajustaTempos() {
    this.processoComPlano.map((processo:ProcessoNegocio) => {
      processo.planoExecucaos.map((plano:PlanoExecucao) => {
        var tempo = plano.tempoEstimadoStr.split(":");
        plano.tempoEstimado = new Date(1970,0,1,Number(tempo[0]), Number(tempo[1]) ,0,0); 
      })
    });
    this.calculaSoma();
    console.log('Objeto Processado:' ,  this.processoComPlano);
  }
}
