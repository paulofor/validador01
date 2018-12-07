import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TelaWeb, TelaWebApi } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { EscolhaComponenteTelaWebComponent } from '../escolha-componente-tela-web/escolha-componente-tela-web.component';

@Component({
  selector: 'app-tela-detalhe',
  templateUrl: './tela-detalhe.component.html',
  styleUrls: ['./tela-detalhe.component.scss']
})
export class TelaDetalheComponent implements OnInit {


  item : TelaWeb;

  consulta = { "relation" : "telaComponenteWebs" , "scope" : {"include" : ""}};

  constructor(private route: ActivatedRoute, private srv: TelaWebApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaObjeto();
  }

  carregaObjeto() {
    this.route.params.subscribe((params: Params) => {
      let id  = params['id'];
      console.log('IdTela: ', id);
      this.srv.findById(id)
        .subscribe((valor: TelaWeb) => {
          console.log('Objeto: ' + JSON.stringify(valor));
          this.item = valor;
        })
    });
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaObjeto();
    });
    this.dialog.open(EscolhaComponenteTelaWebComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }
  

}
