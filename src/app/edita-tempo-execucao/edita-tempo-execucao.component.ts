import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { TempoExecucao, PlanoExecucao, TempoExecucaoApi, ProjetoMySql, ProjetoMySqlApi } from '../shared/sdk';

@Component({
  selector: 'app-edita-tempo-execucao',
  templateUrl: './edita-tempo-execucao.component.html',
  styleUrls: ['./edita-tempo-execucao.component.scss']
})
export class EditaTempoExecucaoComponent implements OnInit {

  tempo : TempoExecucao;
  plano : PlanoExecucao;
  listaProjeto: ProjetoMySql[];

  constructor(public dialogRef: MatDialogRef<EditaTempoExecucaoComponent>,
    private servico : TempoExecucaoApi
    , @Inject(MAT_DIALOG_DATA) public data: any, private srvProjeto: ProjetoMySqlApi ) { }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.tempo) {
      console.log("fluxo nova");
      this.tempo = new TempoExecucao();
      this.tempo.dataReferencia = new Date();
      this.tempo.horaInicio = new Date();
      this.tempo.horaTermino = new Date();
      this.plano = this.data.plano;
      console.log('Plano: ' , this.plano);
      this.srvProjeto.find()
        .subscribe((res:ProjetoMySql[])=> {
          this.listaProjeto = res;
        })
    } else {
      console.log('fluxo altera');
      this.tempo = this.data.tempo;
      this.tempo.horaTermino = new Date();
      console.log('Tempo:', JSON.stringify(this.tempo));
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.tempo));
    if (!this.tempo.id) {
      
 
      this.tempo.planoExecucaoId = this.plano.id;
      this.tempo.processoNegocioId = this.plano.processoNegocioId;
      this.tempo.contextoId = this.plano.contextoId;
      this.tempo.diaSemanaId = this.plano.diaSemanaId;
      this.tempo.semanaId = this.plano.semanaId;
      this.tempo.tempo = new Date(0);

      console.log("TempoExecucao: " ,JSON.stringify(this.tempo));   
      /*
      this.servico.create(this.tempo, (err, obj) => {
        console.log("Erro:" + JSON.stringify(err));
        console.log('Obj' + obj );
      }).subscribe((e: any) => {
        console.log('Resposta:' , JSON.stringify(e));
        this.closeDialog();
      });
      */
      this.servico.create(this.tempo)
        .subscribe(
          data => console.log('Data:' , JSON.stringify(data)),
          err => {
            console.log('Erro - :' , err.message);
            console.log('SQL:' , err.sql);
          }
        );
    } else {
      this.servico.updateAttributes(this.tempo.id, this.tempo, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    }
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
