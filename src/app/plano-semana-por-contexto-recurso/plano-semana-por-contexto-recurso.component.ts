import { Component, OnInit, Input } from '@angular/core';
import { DiaSemana, PlanoExecucao, Contexto, Semana, VersaoRecurso, VersaoRecursoApi, PlanoExecucaoApi } from '../shared/sdk';
import { FormControl } from '@angular/forms';
import { VersaoRecursoService } from '../comum/versao-recurso.service';

@Component({
  selector: 'app-plano-semana-por-contexto-recurso',
  templateUrl: './plano-semana-por-contexto-recurso.component.html',
  styleUrls: ['./plano-semana-por-contexto-recurso.component.scss']
})
export class PlanoSemanaPorContextoRecursoComponent implements OnInit {

  listaDiaSemana: DiaSemana[];
  versaoRecursoExecucao: VersaoRecurso[];

  somaDias: PlanoExecucao[];
  somaProcesso: PlanoExecucao[];
  totalTempo: Date;

  @Input() contexto: Contexto;
  @Input() semana: Semana;
  myControl = new FormControl();

  constructor(private srv: VersaoRecursoApi, private srvPost: VersaoRecursoService,
            private srvPlano: PlanoExecucaoApi) { }

  ngOnInit() {
    this.carregaProcesso();
  }

  criaPlano() {
    this.srvPlano.CriaParaVersaoRecurso(this.contexto.id,this.semana.id)
      .subscribe((result) => {
        console.log('Resultado PlanoRecurso' , JSON.stringify(result));
        this.carregaProcesso();
      })
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
    this.srv.ObtemComPlanoPorSemanaVersao(this.semana.id, this.contexto.id)
      .subscribe((resultado) => {
        this.versaoRecursoExecucao = resultado;
        console.log('carregaProcesso:', this.versaoRecursoExecucao);
        this.ajustaTempos();
      });
  }

  calculaSoma() {
    //console.log('ajustaTempos(ini):', this.processoComPlano);
    this.totalTempo = new Date(0);
    this.somaProcesso = [];
    this.criaSomaDia();
    this.versaoRecursoExecucao.forEach((valor: VersaoRecurso) => {
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
    this.ajustaTempos();
    console.log('Chamou submit');
    var lista = { "lista": this.versaoRecursoExecucao };
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

  getSoma(processo: VersaoRecurso): Date {
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

  getPercentProcesso(processo: VersaoRecurso): number {
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
    //console.log('ajustaTempos(ini):', this.processoComPlano);
    this.versaoRecursoExecucao.forEach((processo: VersaoRecurso) => {
      processo.planoExecucaos.forEach((plano: PlanoExecucao) => {
        var tempo = plano.tempoEstimadoStr.split(":");
        plano.tempoEstimado = new Date(0);
        plano.tempoEstimado.setUTCHours(Number(tempo[0]));
        plano.tempoEstimado.setUTCMinutes(Number(tempo[1]));
        plano.tempoExecucao = new Date(0);
      })
    });
    this.calculaSoma();
  }


}
