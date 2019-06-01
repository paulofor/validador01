import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EscolhedorItemVallidacaoComponent } from '../escolhedor-item-vallidacao/escolhedor-item-vallidacao.component';
import { ProjetoCanvasMySql, ProjetoMySqlApi, PaginaValidacaoWebApi, PaginaInstalacaoAppApi } from '../shared/sdk';
import { ParamMap } from '@angular/router';
import { PaginaValidacaoWeb, PaginaInstalacaoApp } from '../shared/sdk/models';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escolhe-item-validacao',
  templateUrl: './escolhe-item-validacao.component.html',
  styleUrls: ['./escolhe-item-validacao.component.scss']
})
export class EscolheItemValidacaoComponent implements OnInit {


  consulta = { "include": ["projeto", "itemValidacaoPaginas"] };


  @Input() pagina;
  @Input() paginaInstalacao;

  constructor(private route: ActivatedRoute, private dialog: MatDialog,
    private srvPagina: PaginaValidacaoWebApi, private srvPaginaInstalacao: PaginaInstalacaoAppApi, private router: Router) { }

  ngOnInit() {

  }

  atualizaPagina() {
    if (this.pagina) {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.srvPagina.findById(this.pagina.id, this.consulta)
        )).subscribe((paginaResult: PaginaValidacaoWeb) => {
          this.pagina = paginaResult;
        })
    }
    if (this.paginaInstalacao) {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.srvPaginaInstalacao.findById(this.paginaInstalacao.id, this.consulta)
        )).subscribe((paginaResult: PaginaInstalacaoApp) => {
          this.paginaInstalacao = paginaResult;
        })
    }
  }



  openDialog(pagina) {
    console.log('Pagina:', pagina);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaPagina();
    });
    if (this.pagina) {
      this.dialog.open(EscolhedorItemVallidacaoComponent, {
        width: '800px',
        data: {
          pagina: this.pagina
        }
      });
    }
    if (this.paginaInstalacao) {
      this.dialog.open(EscolhedorItemVallidacaoComponent, {
        width: '800px',
        data: {
          paginaInstalacao: this.paginaInstalacao
        }
      });
    }
  }

}
