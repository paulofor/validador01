import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { CampanhaAds, PaginaValidacaoWeb, CampanhaAdsApi } from '../shared/sdk';

@Component({
  selector: 'app-campanha-edita-cria',
  templateUrl: './campanha-edita-cria.component.html',
  styleUrls: ['./campanha-edita-cria.component.scss']
})
export class CampanhaEditaCriaComponent implements OnInit {

  private item: CampanhaAds;
  private pagina: PaginaValidacaoWeb;

  constructor(public dialogRef: MatDialogRef<CampanhaEditaCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private campanhaSrv: CampanhaAdsApi) { }



  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (!this.data.campanha) {
      this.item = new CampanhaAds();
    } else {
      this.item = this.data.campanha;
    }
    this.pagina = this.data.pagina;
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
       this.item.paginaValidacaoWebId = this.pagina.id;
       this.item.dataCriacao = new Date();      
       this.campanhaSrv.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.campanhaSrv.updateAttributes(this.item.id, this.item, (err, obj) => {
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
