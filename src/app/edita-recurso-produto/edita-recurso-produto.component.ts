import { Component, OnInit } from '@angular/core';
import { RecursoProdutoApi, RecursoProduto, EtapaCliente, EtapaClienteApi } from '../shared/sdk';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-edita-recurso-produto',
  templateUrl: './edita-recurso-produto.component.html',
  styleUrls: ['./edita-recurso-produto.component.scss']
})
export class EditaRecursoProdutoComponent implements OnInit {

  item: RecursoProduto;

  listaEtapa:EtapaCliente[];

  constructor(public dialogRef: MatDialogRef<EditaRecursoProdutoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servico: RecursoProdutoApi, private srvEtapa: EtapaClienteApi) {
  }


  carregaEtapa() {
    let filtro = {};
    this.srvEtapa.find(filtro)
      .subscribe((result: EtapaCliente[]) => {
        this.listaEtapa = result;
      })
  }
  
  ngOnInit() {
    this.carregaEtapa();
    if (!this.data.item) {
      this.item = new RecursoProduto();
    } else {
      this.item = this.data.item;
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      this.servico.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      delete this.item.tempoConsumido;
      this.servico.updateAttributes(this.item.id, this.item, (err, obj) => {
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
