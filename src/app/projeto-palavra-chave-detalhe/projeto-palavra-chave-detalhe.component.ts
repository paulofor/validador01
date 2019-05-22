import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjetoMySqlApi, ProjetoMySql, PalavraChaveEstatisticaApi, PalavraChaveEstatistica, PalavraGoogleProjetoApi, PalavraChaveGoogle, PalavraGoogleProjeto } from '../shared/sdk';
import { PalavraChaveAddProjetoComponent } from '../palavra-chave-add-projeto/palavra-chave-add-projeto.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-projeto-palavra-chave-detalhe',
  templateUrl: './projeto-palavra-chave-detalhe.component.html',
  styleUrls: ['./projeto-palavra-chave-detalhe.component.scss']
})
export class ProjetoPalavraChaveDetalheComponent implements OnInit {

  projeto: ProjetoMySql;
  lista:PalavraGoogleProjeto[];

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private srv: ProjetoMySqlApi,
    private srvPalavraChave:PalavraGoogleProjetoApi) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.findById(id)
        .subscribe((valor: ProjetoMySql) => {
          console.log('Item: ' + JSON.stringify(valor));
          this.projeto = valor;
          this.carregaPalavraChave();
        })
    });
  }


  openDialog(tipoArea) {
    console.log('Tipo:', tipoArea);
    this.dialog.afterAllClosed.subscribe(result => { 
      this.carregaDados();
    });
    this.dialog.open(PalavraChaveAddProjetoComponent, {
      width: '600px',
      data: {
        item: this.projeto
      }
    });
  }

  carregaPalavraChave() {
    this.srvPalavraChave.find(
      {
        'where' : { 'projetoMySqlId' : this.projeto.id }
        
      })
      .subscribe((result:PalavraGoogleProjeto[]) => {
        console.log('Lista: ' , result);
        this.lista = result;
      })
  }

}
