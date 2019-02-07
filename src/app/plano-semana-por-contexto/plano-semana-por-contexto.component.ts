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
  totalTempo: Date;

  @Input() contexto: string;
  @Input() semana: Semana;
  myControl = new FormControl();

  constructor(private srv: ProcessoNegocioApi) { }

  ngOnInit() {
    this.carregaProcesso();
  }

  criaSomaDia() {
    this.somaDias = [];
    var planoSomaDia: PlanoExecucao
    for (var i = 1; i <= 7; i++) {
      planoSomaDia = new PlanoExecucao();
      planoSomaDia.diaSemanaId = i;
      planoSomaDia.tempoEstimado = new Date(0);
      this.somaDias.push(planoSomaDia);
    }
  }

  carregaProcesso() {
    //console.log('IdSemana: ', this.semana.id);
    //this.criaSomaDia();
    this.srv.ObtemComPlanoPorSemana(this.semana.id, 1)
      .subscribe((resultado) => {
        this.processoComPlano = resultado;
        console.log('carregaProcesso:', this.processoComPlano);
        this.ajustaTempos();
      });
  }

  calculaSoma() {
    console.log('ajustaTempos(ini):', this.processoComPlano);
    this.totalTempo = new Date(0);
    this.somaProcesso = [];
    this.criaSomaDia();
    this.processoComPlano.forEach((valor: ProcessoNegocio) => {
      var planoSoma: PlanoExecucao = new PlanoExecucao();
      planoSoma.tempoEstimado = new Date(0);
      planoSoma.processoNegocioId = valor.id;
      valor.planoExecucaos.forEach((plano: PlanoExecucao) => {
        planoSoma.tempoEstimado.setTime(planoSoma.tempoEstimado.getTime() + plano.tempoEstimado.getTime());
        var planoSomaDia = this.getItemSomaDia(plano.diaSemanaId);
        planoSomaDia.tempoEstimado.setTime(planoSomaDia.tempoEstimado.getTime() + plano.tempoEstimado.getTime());
        this.totalTempo.setTime(this.totalTempo.getTime() + plano.tempoEstimado.getTime());
      });
      this.somaProcesso.push(planoSoma);
    });
    console.log('ajustaTempos(final):', this.processoComPlano);
    //console.log('Soma Dias: ', this.somaDias);
  }

  onSubmit() {
    console.log('Chamou submit');

    console.log("Objeto-Envio:", JSON.stringify(this.processoComPlano));
    //this.ajustaTempos();

    this.srv.AtualizaListaComPlano({"lista" : this.processoComPlano})
      .subscribe((resultado) => {
        this.carregaProcesso();
      })
  }

  getSoma(processo: ProcessoNegocio): Date {
    var saida: Date = new Date(0);
    if (this.somaProcesso) {
      this.somaProcesso.forEach((item: PlanoExecucao) => {
        if (processo.id == item.processoNegocioId) {
          saida = item.tempoEstimado;
        }
      })
    }
    return saida;
  }

  getDataItemSoma(id: number) {
    var plano = this.getItemSomaDia(id);
    return (plano != null ? plano.tempoEstimado : new Date(0));
  }

  getItemSomaDia(id: number): PlanoExecucao {
    var saida: PlanoExecucao = null;
    if (this.somaDias) {
      this.somaDias.forEach((item: PlanoExecucao) => {
        if (item.diaSemanaId == id) {
          saida = item;
        }
      })
    }
    return saida;
  }

  getPercentProcesso(processo: ProcessoNegocio): number {
    var saida = 0;
    var item: Date = this.getSoma(processo);
    if (this.totalTempo) {
      var minutosTotal = (this.totalTempo.getUTCHours() * 60) + this.totalTempo.getUTCMinutes();
      var minutosItem = (item.getUTCHours() * 60) + item.getUTCMinutes();
      saida = (minutosItem / minutosTotal) * 100;
    }
    return saida;
  }

  updateDate(evento, coluna: PlanoExecucao) {
    console.log('Evento:', evento);
    coluna.tempoEstimado = evento;
  }

  ajustaTempos() {
    console.log('ajustaTempos(ini):', this.processoComPlano);
    this.processoComPlano.forEach((processo: ProcessoNegocio) => {
      processo.planoExecucaos.forEach((plano: PlanoExecucao) => {
        var tempo = plano.tempoEstimadoStr.split(":");
        plano.tempoEstimado = new Date(0);
        plano.tempoEstimado.setUTCHours(Number(tempo[0]));
        plano.tempoEstimado.setUTCMinutes(Number(tempo[1]));
      })
    });
    this.calculaSoma();
  }

}
