import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Entidade, Aplicacao, AplicacaoApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EntidadeEditaCriaComponent } from '../entidade-edita-cria/entidade-edita-cria.component';

@Component({
  selector: 'app-entidade-por-aplicacao-v2',
  templateUrl: './entidade-por-aplicacao-v2.component.html',
  styleUrls: ['./entidade-por-aplicacao-v2.component.scss']
})
export class EntidadePorAplicacaoV2Component implements OnInit {

  @Input() aplicacao: Aplicacao;
  listaEntidade : Entidade[];


  constructor(private route: ActivatedRoute, private servico: AplicacaoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.servico.getEntidades(this.aplicacao.id_aplicacao)
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



}
