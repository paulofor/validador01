import { Component, OnInit } from '@angular/core';
import { VersaoApp, VersaoAppApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AssociaItemValorVersaoAppComponent } from '../associa-item-valor-versao-app/associa-item-valor-versao-app.component';

@Component({
  selector: 'app-versao-app-detalhe',
  templateUrl: './versao-app-detalhe.component.html',
  styleUrls: ['./versao-app-detalhe.component.scss']
})
export class VersaoAppDetalheComponent implements OnInit {


  versaoApp: VersaoApp;
  filtro = {"include" : { "relation" : "valorVersaos" , "scope" : {"include" : "itemValorApp" } } };
  
  constructor(private route: ActivatedRoute, private srv: VersaoAppApi, private dialog : MatDialog) { }


  ngOnInit() {
    this.carregaVersao();
  }

  carregaVersao() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log('ID-VersaoApp:' , id);
      this.srv.findById(id,this.filtro)
        .subscribe((resultado: VersaoApp) => {
          console.log('Resultado: ' , resultado);
          this.versaoApp = resultado;
        })
    })
  }

  openDialog(versao?) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaVersao();
    });
    this.dialog.open(AssociaItemValorVersaoAppComponent, {
      width: '800px',
      data: {
        item: versao
      }
    });
  }

}
