import { Component, OnInit } from '@angular/core';
import { EtapaProjeto, ProcessoNegocio, ProcessoNegocioApi, ProcessoNegocioEtapaProjetoApi, ProcessoNegocioEtapaProjeto } from '../shared/sdk';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-associa-processo-etapa',
  templateUrl: './associa-processo-etapa.component.html',
  styleUrls: ['./associa-processo-etapa.component.scss']
})
export class AssociaProcessoEtapaComponent implements OnInit {


  item: EtapaProjeto;
  listaProcesso: ProcessoNegocio[];

  

  constructor(public dialogRef: MatDialogRef<AssociaProcessoEtapaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private srvProcesso: ProcessoNegocioApi, 
      private srvProcessoEtapa : ProcessoNegocioEtapaProjetoApi) { }

  ngOnInit() {
   
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
    this.carregaEtapas();
  }

  carregaEtapas() {
    this.srvProcesso.ObtemAtivoComEtapaPorId(this.item.id)
      .subscribe((result: ProcessoNegocio[]) => {
        this.listaProcesso = result;
        console.log('lista', this.listaProcesso);
      })
  }


  onSubmit() {
    console.log('Enviando lista: ' , this.item.id, this.listaProcesso);
    this.srvProcessoEtapa.AtualizaPorEtapa(this.item.id, this.listaProcesso)
      .subscribe((result) => {
        this.dialogRef.close('Pizza!');
      })
  }


  getCheck(item:EtapaProjeto) : boolean {
    return (item.processoNegocioEtapaProjetos!=null);
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  onChange(event, index, processo : ProcessoNegocio) {
    if (processo.processoNegocioEtapaProjetos==null) {
      processo.processoNegocioEtapaProjetos = new ProcessoNegocioEtapaProjeto();
      processo.processoNegocioEtapaProjetos.etapaProjetoId = this.item.id;
      processo.processoNegocioEtapaProjetos.processoNegocioId = processo.id;
    } else {
      processo.processoNegocioEtapaProjetos = null;
    }
  }

}
