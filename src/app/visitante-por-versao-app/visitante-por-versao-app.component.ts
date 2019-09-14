import { Component, OnInit } from '@angular/core';
import { VersaoApp, VersaoAppApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DetalheRespostaVisitanteComponent } from '../detalhe-resposta-visitante/detalhe-resposta-visitante.component';

@Component({
  selector: 'app-visitante-por-versao-app',
  templateUrl: './visitante-por-versao-app.component.html',
  styleUrls: ['./visitante-por-versao-app.component.scss']
})
export class VisitantePorVersaoAppComponent implements OnInit {


  idProjeto: number;

  versaoApp: VersaoApp;

  constructor(private route: ActivatedRoute, private srv: VersaoAppApi,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaAnuncios();
  }

  carregaAnuncios() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.findById(id,{ "include" : {"relation" : "visitantes" , "scope" : {"include": "clienteExperimental" } } })
        .subscribe((resultado: VersaoApp) => {
          this.versaoApp = resultado;
        })
    })
  }



  openDialog(visitante) {
    this.dialog.open(DetalheRespostaVisitanteComponent, {
      width: '800px',
      data: {
        item: visitante
      }
    });
  }





}
