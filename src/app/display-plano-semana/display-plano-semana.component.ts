import { Component, OnInit, Input } from '@angular/core';
import { Semana, PlanoExecucao, ProcessoNegocio, ProcessoNegocioApi, DiaSemana } from '../shared/sdk';
import { ProcessoNegocioService } from '../comum/processo-negocio.service';
import { Contexto } from '../shared/sdk/models';

@Component({
  selector: 'app-display-plano-semana',
  templateUrl: './display-plano-semana.component.html',
  styleUrls: ['./display-plano-semana.component.scss']
})
export class DisplayPlanoSemanaComponent implements OnInit {


  listaDiaSemana: DiaSemana[];
  processoComPlano: ProcessoNegocio[];

  somaDias: PlanoExecucao[];
  somaProcesso: PlanoExecucao[];
  totalTempo: Date;

  @Input() contexto: Contexto;
  @Input() semana: Semana;
  

  constructor(private srv: ProcessoNegocioApi, private srvPost: ProcessoNegocioService) { }

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

    this.srv.ObtemComPlanoPorSemanaProcesso(this.semana.id, this.contexto.id)
      .subscribe((resultado) => {
        this.processoComPlano = resultado;
        console.log('carregaProcesso:', this.processoComPlano);
        this.ajustaTempos();
      });
  }

  calculaSoma() {
    //console.log('ajustaTempos(ini):', this.processoComPlano);
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
  }

  onSubmit() {
    console.log('Chamou submit');
    var lista = { "lista": this.processoComPlano };
    console.log("Envio:", JSON.stringify(lista));
    this.srvPost.AtualizaListaComPlanoPost(lista)
      .subscribe(
        data => {
          this.carregaProcesso();
        },
        err => {
          console.log('Erro-Submit:', err.message);
          console.log('Err:' , err);
        }
      );
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
    
    this.processoComPlano.forEach((processo: ProcessoNegocio) => {
      processo.planoExecucaos.forEach((plano: PlanoExecucao) => {
        var tempo = plano.tempoEstimado.toString().split(":");
        plano.tempoEstimado = new Date(0);
        plano.tempoEstimado.setUTCHours(Number(tempo[0]));
        plano.tempoEstimado.setUTCMinutes(Number(tempo[1]));
        //plano.tempoExecucao = new Date(0);
        //plano.tempoEstimado = new Date("1970-01-01 " + plano.tempoEstimado);
      })
    });
    
    this.calculaSoma();
  }

}
