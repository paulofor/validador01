import { Component, OnInit } from '@angular/core';
import { ProjetoMySql, PaginaValidacaoWeb, ConceitoProduto, ProjetoMySqlApi, PaginaInstalacaoApp } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EditaPaginaInstalacaoAppComponent } from '../edita-pagina-instalacao-app/edita-pagina-instalacao-app.component';

@Component({
  selector: 'app-pagina-instalacao-gerenciador',
  templateUrl: './pagina-instalacao-gerenciador.component.html',
  styleUrls: ['./pagina-instalacao-gerenciador.component.scss']
})
export class PaginaInstalacaoGerenciadorComponent implements OnInit {

  projeto: ProjetoMySql;
  listaPagina: PaginaInstalacaoApp[];
  conceito: ConceitoProduto;

  filtro = { "include": "paginaInstalacaoApps" };

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.findById(id, this.filtro)
        .subscribe((result: ProjetoMySql) => {
          console.log('Item: ' + JSON.stringify(result));
          this.projeto = result;
        });
    })
  }

  openDialog(pagina?) {
    if (!pagina) {
      pagina = new PaginaInstalacaoApp();
      pagina.permiteEdicao = true;
      pagina.projetoMySqlId = this.projeto.id;
      console.log('Pagina Nova:' , pagina);
    }
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaDados();
    });
    this.dialog.open(EditaPaginaInstalacaoAppComponent, {
      width: '1400px',
      data: {
        item: pagina
      }
    });
  }


  visitar(item){
    window.open("http://validacao.kinghost.net/oferta/?inst=" + item.codigoHash , "_blank");
  }
 

  permiteAlterar(item : PaginaInstalacaoApp) {
    return (item.permiteEdicao==1);
  }
}
