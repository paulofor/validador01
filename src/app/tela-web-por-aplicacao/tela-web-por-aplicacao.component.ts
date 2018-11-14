import { Component, OnInit, Input } from '@angular/core';
import { TelaWeb, Aplicacao, AplicacaoApi } from '../shared/sdk';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material';
import { switchMap } from 'rxjs/operators';
import { TelaWebEditaCriaComponent } from '../tela-web-edita-cria/tela-web-edita-cria.component';

@Component({
  selector: 'app-tela-web-por-aplicacao',
  templateUrl: './tela-web-por-aplicacao.component.html',
  styleUrls: ['./tela-web-por-aplicacao.component.scss']
})
export class TelaWebPorAplicacaoComponent implements OnInit {


  @Input() aplicacao: Aplicacao;
  listaTelaWeb : TelaWeb[];

  constructor(private route: ActivatedRoute, private servico: AplicacaoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.servico.getTelaWebs(this.aplicacao.id_aplicacao)
      )).subscribe((listaTelaWeb : TelaWeb[]) => {
        this.listaTelaWeb = listaTelaWeb;
      })
  }

 
  openDialog(aplicacao) {
    console.log('aplicacao:', aplicacao);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}'); 
      this.atualizaLista();
    });
    this.dialog.open(TelaWebEditaCriaComponent, {
      width: '800px',
      data: {
        aplicacao: this.aplicacao
      }
    });
  }


  alteraTelaWeb(telaWeb) {
    console.log('entidade:', telaWeb);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}'); 
      this.atualizaLista();
    });
    this.dialog.open(TelaWebEditaCriaComponent, {
      width: '800px',
      data: {
        telaWeb: telaWeb
      }
    });
  }


}
