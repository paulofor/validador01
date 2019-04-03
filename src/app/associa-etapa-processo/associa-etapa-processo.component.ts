import { Component, OnInit, Inject } from '@angular/core';
import { ProcessoNegocio, EtapaProjetoApi, EtapaProjeto } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-associa-etapa-processo',
  templateUrl: './associa-etapa-processo.component.html',
  styleUrls: ['./associa-etapa-processo.component.scss']
})
export class AssociaEtapaProcessoComponent implements OnInit {


  item: ProcessoNegocio;
  listaEtapa: EtapaProjeto[];

  listaItem = [
    { "nome": "Valor 1", "conteudo": false },
    { "nome": "Valor 2", "conteudo": true },
    { "nome": "Valor 3", "conteudo": false }
  ]

  constructor(public dialogRef: MatDialogRef<AssociaEtapaProcessoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private srvEtapa: EtapaProjetoApi) { }

  ngOnInit() {
    this.carregaEtapas();
    console.log("Parametro entrada", this.data);
    if (!this.data.item) {
      console.log("fluxo nova");
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  carregaEtapas() {
    this.srvEtapa.find({ 'where': { 'ativo': '1' } })
      .subscribe((result: EtapaProjeto[]) => {
        this.listaEtapa = result;
        console.log('lista', this.listaEtapa);
      })
  }


  onSubmit() {
  }


  getCheck(item) {
    return item.conteudo;
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  onChange(event, index, item) {
    item.conteudo = !item.conteudo;
    console.log(this.listaItem);
  }
  
}
