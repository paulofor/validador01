import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EntidadeApi, Entidade, Aplicacao } from '../shared/sdk';

@Component({
  selector: 'app-entidade-edita-cria',
  templateUrl: './entidade-edita-cria.component.html',
  styleUrls: ['./entidade-edita-cria.component.scss']
})
export class EntidadeEditaCriaComponent implements OnInit {

  item : Entidade;
  aplicacao : Aplicacao;

  constructor(public dialogRef: MatDialogRef<EntidadeEditaCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any,
    private entidadaSrv: EntidadeApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada" , this.data);
    this.item = new Entidade();
    this.aplicacao = this.data.aplicacao;
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    this.item.id_aplicacao = this.aplicacao.id_aplicacao;
    this.entidadaSrv.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
