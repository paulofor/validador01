import { Component, OnInit } from '@angular/core';
import { PaginaInstalacaoApp, ProjetoMySqlApi, PaginaInstalacaoAppApi, ProjetoMySql } from '../shared/sdk';
import { ActivatedRoute, Router, UrlSegment, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edicao-pagina-instalacao-app',
  templateUrl: './edicao-pagina-instalacao-app.component.html',
  styleUrls: ['./edicao-pagina-instalacao-app.component.scss']
})
export class EdicaoPaginaInstalacaoAppComponent implements OnInit {

  consulta = {"include" : ["projeto","itemValidacaoPaginas"] };

  pagina: PaginaInstalacaoApp;

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi,
    private srvPagina: PaginaInstalacaoAppApi, private router: Router) { }

  ngOnInit() {
    const segments: UrlSegment[] = this.route.snapshot.url;
    console.log('Segments:', segments);
    if (this.route.snapshot.url[0].path === 'editaPaginaInstalacaoApp') {
      this.inicializaEdicao();
    } else {
      this.inicializaAdicao();
    }
  }


  onSubmit() {
    if (this.route.snapshot.url[0].path === 'editaPaginaInstalacaoApp') {
      this.atualizaItem();
    } else {
      this.insereItem();
    }
  }

  insereItem() {
    this.pagina.projetoMySqlId = this.pagina.projeto.id;
    this.pagina.permiteEdicao = 1;
    console.log("Pagina: ", this.pagina);
    this.srvPagina
      .create(this.pagina, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        this.router.navigate(['paginaValidacaoPorProjeto/' + this.pagina.projetoMySqlId]);
      });
  }

  atualizaItem() {
    this.srvPagina
      .updateAttributes(this.pagina.id, this.pagina, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        this.router.navigate(['paginaValidacaoPorProjeto/' + this.pagina.projetoMySqlId]);
      });
  }


  inicializaEdicao() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.srvPagina.findById(params.get('id'), this.consulta)
      )).subscribe((paginaResult: PaginaInstalacaoApp) => {
        this.pagina = paginaResult;
      })
  }

  inicializaAdicao() {
    this.pagina = new PaginaInstalacaoApp();
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.srv.findById(params.get('id'))
      )).subscribe((projetoResult: ProjetoMySql) => {
        this.pagina.projeto = projetoResult;
      })
  }
}
