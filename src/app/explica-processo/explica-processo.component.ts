import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProcessoNegocioApi, ProcessoNegocio } from '../shared/sdk';

@Component({
  selector: 'app-explica-processo',
  templateUrl: './explica-processo.component.html',
  styleUrls: ['./explica-processo.component.scss']
})
export class ExplicaProcessoComponent implements OnInit {

  item: ProcessoNegocio;
  etapas: string;


  constructor(public dialogRef: MatDialogRef<ExplicaProcessoComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private srv: ProcessoNegocioApi) {
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (this.data.item.id) {
      let filtro = { 'include' : {'relation':'processoNegocioEtapaProjetos' , 'scope' : {'include':'etapaProjeto'} }}
      this.srv.findById(this.data.item.id, filtro)
        .subscribe((resultado: ProcessoNegocio) => {
          console.log('Item-Load: ', resultado);
          this.item = resultado;
          this.criaEtapas();
        })
    }
  }

  criaEtapas() {
    this.etapas = this.item.processoNegocioEtapaProjetos.reduce((acc, item, indice, original) => {
      return acc + item.etapaProjeto.nome + ', ';
    },'');
  }

}
