import { Component, OnInit } from '@angular/core';
import { ProcessoNegocioApi, DiaSemana, Semana, PlanoExecucao, TempoExecucao } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { EditaTempoExecucaoComponent } from 'src/app/edita-tempo-execucao/edita-tempo-execucao.component';

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


  constructor(private srv: ProcessoNegocioApi, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.srv.ObtemPlanoDia()
      .subscribe((result) => {
        console.log('Result: ', result);
        this.semana = result.semana;
        this.diaSemana = result.diaSemana;
        this.listaPlano = result.listaProcesso;
        this.listaExecucao = result.listaTempoExecucao;
        console.log('ListaPlano', this.listaPlano);
      })
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
}
