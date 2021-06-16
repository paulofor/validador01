import { Component, OnInit } from '@angular/core';
import { VersaoApp, VersaoAppApi, VersaoTelaApp } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AssociaItemValorVersaoAppComponent } from '../associa-item-valor-versao-app/associa-item-valor-versao-app.component';
import { AssociaVersaoTelaComponent } from '../associa-versao-tela/associa-versao-tela.component';
import { VersaoTelaAppEditaComponent } from '../versao-tela-app-edita/versao-tela-app-edita.component';
import { ImagemTelaUploadComponent } from '../imagem-tela-upload/imagem-tela-upload.component';
import { EscolheTelaAppParaVersaoComponent } from '../escolhe-tela-app-para-versao/escolhe-tela-app-para-versao.component';

@Component({
  selector: 'app-versao-app-detalhe',
  templateUrl: './versao-app-detalhe.component.html',
  styleUrls: ['./versao-app-detalhe.component.scss']
})
export class VersaoAppDetalheComponent implements OnInit {


  versaoApp: VersaoApp;
  filtro = { 
    "include" : [
      { "relation" : "valorVersaos" , "scope" : { "include" : "itemValorApp" }},
      { "relation" : "versaoTelaApps" , "scope" : { "include" : [
        {"relation" : "telaApp"} , {"relation" : "versaoTelaAppMetricas"}
      ]}} ,
    
    ] 
  };
  
  constructor(private route: ActivatedRoute, private srv: VersaoAppApi, private dialog : MatDialog, private dialog2:MatDialog) { }


  ngOnInit() {
    this.carregaVersao();
  }

  escolheTela() {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaVersao();
    });
    this.dialog.open(EscolheTelaAppParaVersaoComponent, {
      width: '800px',
      data: {
        versao: this.versaoApp
      }
    });
  }

  carregaVersao() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log('ID-VersaoApp:' , id);
      this.srv.findById(id,this.filtro)
        .subscribe((resultado: VersaoApp) => {
          console.log('versaoApp: ' , resultado);
          this.versaoApp = resultado;
        })
    })
  }

  openDialog(versao? : VersaoTelaApp) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaVersao();
    });
    this.dialog.open(AssociaVersaoTelaComponent, {
      width: '800px',
      data: {
        item: versao
      }
    });
  }

  opentTelaEdicao(versaoTelaApp : VersaoTelaApp) {
    this.dialog2.open(VersaoTelaAppEditaComponent, {
      width: '800px',
      data: {
        item: versaoTelaApp
      }
    })

  }

  editaImagem(item : VersaoTelaApp) {
    this.dialog2.open(ImagemTelaUploadComponent, {
      width: '800px',
      data : {
        item: item,
        tipo : 'imagem'
      }
    })
  }

  editaHtml(item : VersaoTelaApp) {
    this.dialog2.open(VersaoTelaAppEditaComponent, {
      width: '800px',
      data : {
        item: item,
        tipo : 'html'
      }
    })
  }

  editaTs(item : VersaoTelaApp) {
    this.dialog2.open(VersaoTelaAppEditaComponent, {
      width: '800px',
      data : {
        item: item,
        tipo : 'ts'
      }
    })
  }

  editaCss(item : VersaoTelaApp) {
    this.dialog2.open(VersaoTelaAppEditaComponent, {
      width: '800px',
      data : {
        item: item,
        tipo : 'css'
      }
    })
  }

}
