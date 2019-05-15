import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjetoMySqlApi, ProjetoMySql, PalavraChaveEstatisticaApi, PalavraChaveEstatistica, PalavraGoogleProjetoApi, PalavraChaveGoogle, PalavraGoogleProjeto } from '../shared/sdk';

@Component({
  selector: 'app-projeto-palavra-chave-detalhe',
  templateUrl: './projeto-palavra-chave-detalhe.component.html',
  styleUrls: ['./projeto-palavra-chave-detalhe.component.scss']
})
export class ProjetoPalavraChaveDetalheComponent implements OnInit {

  projeto: ProjetoMySql;
  lista:PalavraGoogleProjeto[];

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi,
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
