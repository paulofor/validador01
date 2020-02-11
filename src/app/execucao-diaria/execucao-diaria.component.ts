import { Component, OnInit } from '@angular/core';
import { ProcessoNegocioApi, DiaSemana, Semana, PlanoExecucao, TempoExecucao, Contexto, VersaoRecurso } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { EditaTempoExecucaoComponent } from '../edita-tempo-execucao/edita-tempo-execucao.component';
import { Params } from '@angular/router';

@Component({
  selector: 'app-execucao-diaria',
  templateUrl: './execucao-diaria.component.html',
  styleUrls: ['./execucao-diaria.component.scss']
})
export class ExecucaoDiariaComponent implements OnInit {

  semana: Semana;
  diaSemana: DiaSemana;
  listaPlano: PlanoExecucao[];
  listaExecucao: TempoExecucao[];

  versaoCorrente: VersaoRecurso;
  //contexto: Contexto;


  constructor(private srv: ProcessoNegocioApi, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let id  = params['id'];
      this.srv.ObtemPlanoDia(id)
      .subscribe((result) => {
        console.log('Result: ', result);
        this.semana = result.semana;
        this.diaSemana = result.diaSemana;
        this.listaPlano = result.listaProcesso;
        this.listaExecucao = result.listaTempoExecucao;
        console.log('ListaPlano', this.listaPlano);
      })
    });
   
  }


  criaExecucao(plano: PlanoExecucao) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaDados();
    });
    this.dialog.open(EditaTempoExecucaoComponent, {
      width: '800px',
      data: {
        plano: plano
      }
    });
  }

  alteraExecucao(tempo: TempoExecucao) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaDados();
    });
    this.dialog.open(EditaTempoExecucaoComponent, {
      width: '800px',
      data: {
        tempo: tempo
      }
    });
  }

  getHoraInicio(tempo: TempoExecucao) {
    //console.log('HoraInicio:' , tempo.horaInicio);
    return new Date(tempo.horaInicio);
  }
  getHoraTermino(tempo: TempoExecucao) {
    //console.log('getHoraTermino:' , tempo.horaTermino);
    return new Date(tempo.horaTermino);
  }
  getTempo(tempo: TempoExecucao) {
    //console.log('getTempo:' , tempo.tempo);
    return new Date("1970-01-01 " + tempo.tempo);
  }

  selecionadoRecurso(item) {
    console.log('RecursoSelecionado:' , item );
    if (item.versaoRecursos && item.versaoRecursos.length==1) {
      this.versaoCorrente = item.versaoRecursos[0]
    }
  }
}
