import { Component, OnInit, Input } from '@angular/core';
import { Aplicacao, Entidade, AplicacaoApi } from '../shared/sdk';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { EntidadeEditaCriaComponent } from '../entidade-edita-cria/entidade-edita-cria.component';
import { EditaAtributoEntidadeComponent } from '../edita-atributo-entidade/edita-atributo-entidade.component';

@Component({
  selector: 'app-entidade-por-aplicacao',
  templateUrl: './entidade-por-aplicacao.component.html',
  styleUrls: ['./entidade-por-aplicacao.component.scss']
})
export class EntidadePorAplicacaoComponent implements OnInit {


  @Input() aplicacao: Aplicacao;
  listaEntidade : Entidade[];

  constructor(private route: ActivatedRoute, private servico: AplicacaoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.servico.getEntidades(this.aplicacao.id_aplicacao, {"include" : "atributoEntidades"})
      )).subscribe((listaEntidade : Entidade[]) => {
        this.listaEntidade = listaEntidade;
      })
  }

  openDialog(aplicacao) {
    console.log('aplicacao:', aplicacao);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}'); 
      this.atualizaLista();
    });
    this.dialog.open(EntidadeEditaCriaComponent, {
      width: '800px',
      data: {
        aplicacao: this.aplicacao
      }
    });
  }

  novoAtributo(item: Entidade) {
    console.log("Item:", item);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.atualizaLista();
    });
    this.dialog.open(EditaAtributoEntidadeComponent, {
      width: '800px',
      data: {
        entidade: item
      }
    });
  }


}
