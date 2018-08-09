import { Component, OnInit } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjetoMySql, ProjetoMySqlApi, PaginaValidacaoWeb, PaginaValidacaoWebApi } from '../shared/sdk';
import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edicao-pagina-validacao',
  templateUrl: './edicao-pagina-validacao.component.html',
  styleUrls: ['./edicao-pagina-validacao.component.scss']
})
export class EdicaoPaginaValidacaoComponent implements OnInit {

  consulta = {"include" : ["projeto","itemValidacaoPaginas"] };

  pagina: PaginaValidacaoWeb;

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi,
    private srvPagina: PaginaValidacaoWebApi, private router: Router) { }

  ngOnInit() {
    const segments: UrlSegment[] = this.route.snapshot.url;
    console.log('Segments:', segments);
    if (this.route.snapshot.url[0].path === 'editaPaginaValidacaoWeb') {
      this.inicializaEdicao();
    } else {
      this.inicializaAdicao();
    }
  }


  onSubmit() {
    if (this.route.snapshot.url[0].path === 'editaPaginaValidacaoWeb') {
      this.atualizaItem();
    } else {
      this.insereItem();
    }
  }

  insereItem() {
    this.pagina.projetoMySqlId = this.pagina.projeto.id;
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
      )).subscribe((paginaResult: PaginaValidacaoWeb) => {
        this.pagina = paginaResult;
      })
  }

  inicializaAdicao() {
    this.pagina = new PaginaValidacaoWeb();
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.srv.findById(params.get('id'))
      )).subscribe((projetoResult: ProjetoMySql) => {
        this.pagina.projeto = projetoResult;
      })
  }

}
