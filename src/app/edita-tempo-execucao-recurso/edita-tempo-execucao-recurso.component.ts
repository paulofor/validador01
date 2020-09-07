import { Component, OnInit, Inject } from '@angular/core';
import { TempoExecucao, PlanoExecucao, ProjetoMySql, RecursoProduto, IdeiaMelhoria, VersaoRecurso, RecursoProdutoApi, IdeiaMelhoriaApi, ProjetoMySqlApi, TempoExecucaoApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edita-tempo-execucao-recurso',
  templateUrl: './edita-tempo-execucao-recurso.component.html',
  styleUrls: ['./edita-tempo-execucao-recurso.component.scss']
})
export class EditaTempoExecucaoRecursoComponent implements OnInit {
  tempo: TempoExecucao;
  plano: PlanoExecucao;
  //listaProjeto: ProjetoMySql[];
  tempoOk = false;
  idProcesso: number;
  idProjeto: number;
  //listaRecurso: RecursoProduto[];
  idRecurso: number;

  //listaIdeia: IdeiaMelhoria[];
  recurso: RecursoProduto;
  versao: VersaoRecurso;


  constructor(public dialogRef: MatDialogRef<EditaTempoExecucaoRecursoComponent>,
    private servico: TempoExecucaoApi, private srvIdeiaMelhoria: IdeiaMelhoriaApi, 
    private srvRecursoProduto: RecursoProdutoApi
    , @Inject(MAT_DIALOG_DATA) public data: any, private srvProjeto: ProjetoMySqlApi) { }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    this.versao = this.data.plano.versaoRecurso;
    this.recurso = this.versao.recursoProduto;
    if (!this.data.tempo) {
      console.log("fluxo nova");
      this.tempo = new TempoExecucao();
      this.tempo.dataReferencia = new Date();
      this.tempo.horaInicio = new Date();
      this.tempo.horaTermino = new Date();
      this.plano = this.data.plano;
      console.log('Plano: ', this.plano);
      console.log('Tempo:', this.tempo);
      this.tempoOk = true;
      this.idProcesso = this.plano.processoNegocioId;
    } else {
      console.log('fluxo altera');
      this.tempo = this.data.tempo;
      this.tempo.horaTermino = new Date();
      this.tempo.horaInicio = new Date(this.tempo.horaInicio);
      console.log('Tempo:', this.tempo);
      this.tempoOk = true;
      this.idProcesso = this.tempo.processoNegocioId;
      this.idProjeto = this.tempo.projetoMySqlId;
    }
    //console.log('IdProcesso: ', this.idProcesso);
    /*
    this.srvProjeto.ObtemPorIdProcesso(this.idProcesso)
      .subscribe((res: ProjetoMySql[]) => {
        //console.log('Lista Projeto: ', res);
        this.listaProjeto = res;
      })
    */
    //this.listaProjeto = [];
  }



  onSubmit() {
    //console.log('Model: ' + JSON.stringify(this.tempo));
    if (!this.tempo.id) {
      this.tempo.planoExecucaoId = this.plano.id;
      this.tempo.processoNegocioId = this.plano.processoNegocioId;
      this.tempo.contextoId = this.plano.contextoId;
      this.tempo.diaSemanaId = this.plano.diaSemanaId;
      this.tempo.semanaId = this.plano.semanaId;
      this.tempo.versaoRecursoId = this.plano.versaoRecursoId;
      this.tempo.tempo = new Date(0);
      this.tempo.recursoProdutoId = this.recurso.id;
      
      console.log("TempoExecucao(insere): ", JSON.stringify(this.tempo));
      this.servico.Insere(this.tempo)
        .subscribe(
        data => {
          //console.log('Data:', JSON.stringify(data));
          this.closeDialog();
        },
        err => {
          console.log('Erro - :', err.message);
          console.log('SQL:', err.sql);
        }
        );
    } else {
      //console.log("TempoExecucao(alterar): ", JSON.stringify(this.tempo));
      var x = this.tempo.horaTermino.getTime();
      //console.log('Hora Inicio:', this.tempo.horaInicio);
      //console.log('Hora Termino:', this.tempo.horaTermino);
      this.tempo.tempo = new Date(0);
      this.tempo.tempo.setTime(this.tempo.horaTermino.getTime() - this.tempo.horaInicio.getTime());
      if (this.recurso) this.tempo.recursoProdutoId = this.recurso.id;
      console.log("TempoExecucao(altera): ", JSON.stringify(this.tempo));
      this.servico.Altera(this.tempo)
        .subscribe(
        data => {
          //console.log('Data:', JSON.stringify(data));
          this.closeDialog();
        },
        err => {
          console.log('Erro - :', err.message);
          console.log('SQL:', err.sql);
        }
        );
    }
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }


}
