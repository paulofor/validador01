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

  projeto$: Observable<ProjetoMySql>;
  paginaValidacao$ : Observable<PaginaValidacaoWeb>;
  pagina : PaginaValidacaoWeb;
  projetoOrigem : ProjetoMySql;

  constructor(private route: ActivatedRoute, private srv: ProjetoMySqlApi, 
              private srvPagina: PaginaValidacaoWebApi, private router: Router ) { }

  ngOnInit() {
    const segments: UrlSegment[] = this.route.snapshot.url;
    console.log('Segments:' , segments);
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
    this.projeto$.subscribe((result:ProjetoMySql) => this.projetoOrigem = result)
    this.pagina.projetoMySqlId = this.projetoOrigem.id;
    console.log("Signo: ", this.projetoOrigem);
    this.srvPagina
      .create(this.pagina, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.router.navigate(['projetosValor/'  + this.projetoOrigem.id]);
      });
  }

  atualizaItem() {
    this.srvPagina
      .updateAttributes(this.pagina.id, this.pagina, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        console.log('Navegacao: projetosValor/' + this.projetoOrigem.id);
        this.router.navigate(['projetosValor/' + this.projetoOrigem.id ]);
      });
  }


  inicializaEdicao() {
    this.paginaValidacao$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.srvPagina.findById(params.get('id'))
    ))
  }

  inicializaAdicao() {
    this.pagina = new PaginaValidacaoWeb();
    this.projeto$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.srv.findById(params.get('id'))
    ))
  }

}
