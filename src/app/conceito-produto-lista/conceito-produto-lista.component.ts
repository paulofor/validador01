import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConceitoProdutoEditaComponent } from '../conceito-produto-edita/conceito-produto-edita.component';
import { ProjetoMySql, ConceitoProduto, ProjetoMySqlApi, ConceitoProdutoApi } from '../shared/sdk';
import { Input } from '@angular/core';

@Component({
  selector: 'app-conceito-produto-lista',
  templateUrl: './conceito-produto-lista.component.html',
  styleUrls: ['./conceito-produto-lista.component.scss']
})
export class ConceitoProdutoListaComponent implements OnInit {

  @Input() projeto : ProjetoMySql;
  listaConceito : ConceitoProduto[];
  ativo : ConceitoProduto;

  constructor(private route: ActivatedRoute, private dialog: MatDialog, 
              private srv: ProjetoMySqlApi, private srvConceito: ConceitoProdutoApi) { }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.srvConceito.AtivoComListaPorProjeto(this.projeto.id)
      .subscribe((result) => {
        console.log('Result' , JSON.stringify(result));
        this.listaConceito = result.listaConceito;
        console.log('Ativo' , JSON.stringify(result.ativo));
        this.ativo = result.ativo;
      })
  }

  /*
  atualizaLista2() {
    this.srv.getConceitoProdutos(this.projeto.id)
      .subscribe((result: ConceitoProduto[]) => {
        this.listaConceito = result;
      })
  }
  */

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(ConceitoProdutoEditaComponent, {
      width: '800px',
      data: {
        projeto: this.projeto,
        item: item
      }
    });
  }

}
