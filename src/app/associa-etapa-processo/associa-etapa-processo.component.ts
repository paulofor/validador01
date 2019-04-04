import { Component, OnInit, Inject } from '@angular/core';
import { ProcessoNegocio, EtapaProjetoApi, EtapaProjeto, ProcessoNegocioEtapaProjeto, ProcessoNegocioEtapaProjetoApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-associa-etapa-processo',
  templateUrl: './associa-etapa-processo.component.html',
  styleUrls: ['./associa-etapa-processo.component.scss']
})
export class AssociaEtapaProcessoComponent implements OnInit {


  item: ProcessoNegocio;
  listaEtapa: EtapaProjeto[];

  

  constructor(public dialogRef: MatDialogRef<AssociaEtapaProcessoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private srvEtapa: EtapaProjetoApi, 
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
    this.srvEtapa.ObtemAtivaComProcessoPorId(this.item.id)
      .subscribe((result: EtapaProjeto[]) => {
        this.listaEtapa = result;
        console.log('lista', this.listaEtapa);
      })
  }


  onSubmit() {
    console.log(this.listaEtapa);
    this.srvProcessoEtapa.AtualizaPorProcesso(this.item.id, this.listaEtapa)
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

  onChange(event, index, etapa : EtapaProjeto) {
    if (etapa.processoNegocioEtapaProjetos==null) {
      etapa.processoNegocioEtapaProjetos = new ProcessoNegocioEtapaProjeto();
      etapa.processoNegocioEtapaProjetos.processoNegocioId = this.item.id;
      etapa.processoNegocioEtapaProjetos.etapaProjetoId = etapa.id;
    } else {
      etapa.processoNegocioEtapaProjetos = null;
    }
  }
  
}
