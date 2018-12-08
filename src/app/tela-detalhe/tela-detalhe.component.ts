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

  //consulta = { "relation" : "telaComponenteWebs" , "scope" : {"include" : ""}};
  filtro = { "include" : { "relation" : "telaComponenteWebs" , "scope" : {"include" : "componenteWeb" } }};

  constructor(private route: ActivatedRoute, private srv: TelaWebApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaObjeto();
  }

  carregaObjeto() {
    this.route.params.subscribe((params: Params) => {
      let id  = params['id'];
      console.log('IdTela: ', id);
      this.srv.findById(id, this.filtro)
        .subscribe((valor: TelaWeb) => {
          this.item = valor;
          console.log('item: ' +  JSON.stringify(this.item));
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
