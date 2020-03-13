import { Component, OnInit } from '@angular/core';
import { EtapaCliente, EtapaClienteApi, FunilNegocio } from '../../app/shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-edita-etapa-funil',
  templateUrl: './edita-etapa-funil.component.html',
  styleUrls: ['./edita-etapa-funil.component.scss']
})
export class EditaEtapaFunilComponent implements OnInit {

  item : EtapaCliente;
  funil : FunilNegocio;

  listaEtapa: EtapaCliente[];

  constructor(public dialogRef: MatDialogRef<EditaEtapaFunilComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servico: EtapaClienteApi) {
  }

  ngOnInit() {
    this.carregaEtapaTaxa();
    this.funil = this.data.funil;
    if (!this.data.item) {
      this.item = new EtapaCliente();
      this.item.funilNegocioId = this.funil.id;
    } else {
      this.item = this.data.item;
    }
  }

  carregaEtapaTaxa() {
    let filtro = {'order' : 'posicao'}
    this.servico.find(filtro)
      .subscribe((etapas:EtapaCliente[]) => {
        this.listaEtapa = etapas;
      })
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      this.servico.CriaPosicionada(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      delete this.item["etapaCliente"];
      console.log('EtapaCliente: ' , this.item);
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
