import { Component, OnInit, Inject } from '@angular/core';
import { VersaoApp, Visitante, RespostaVersao, RespostaVersaoApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-detalhe-resposta-visitante',
  templateUrl: './detalhe-resposta-visitante.component.html',
  styleUrls: ['./detalhe-resposta-visitante.component.scss']
})
export class DetalheRespostaVisitanteComponent implements OnInit {


  item: Visitante;
  listaResposta: RespostaVersao[];

  constructor(public dialogRef: MatDialogRef<DetalheRespostaVisitanteComponent>, private srv: RespostaVersaoApi
    , @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    console.log('Data:' , this.data.item);
    if (this.data.item) {
      this.item = this.data.item;
      let filtro = { 'where': { 'visitanteId': this.item.id } };
      console.log('Filtro:' , filtro);
      this.srv.find(filtro)
        .subscribe((resultado: RespostaVersao[]) => {
          console.log('ListaResposta' , resultado);
          this.listaResposta = resultado;
        })
    }
  }


  closeDialog() {
    this.dialogRef.close('Pizza!');
  }


}
