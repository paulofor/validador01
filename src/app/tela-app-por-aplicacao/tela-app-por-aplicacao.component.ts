import { Component, OnInit, Input } from '@angular/core';
import { Aplicacao, TelaApp, AplicacaoApi } from '../shared/sdk';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material';
import { switchMap } from 'rxjs/operators';
import { TelaAppEditaCriaComponent } from '../tela-app-edita-cria/tela-app-edita-cria.component';

@Component({
  selector: 'app-tela-app-por-aplicacao',
  templateUrl: './tela-app-por-aplicacao.component.html',
  styleUrls: ['./tela-app-por-aplicacao.component.scss']
})

// ESSE LISTA DE TELAS APP

export class TelaAppPorAplicacaoComponent implements OnInit {

  @Input() aplicacao: Aplicacao;
  listaTelaApp : TelaApp[];
  filtro = { 
    'include' : ['entidade' , 'telaEdicao' , 'entidadePut'],
    'order' : 'nome' 
  };

  constructor(private route: ActivatedRoute, private servico: AplicacaoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.servico.getTelaApps(this.aplicacao.id_aplicacao, this.filtro)
      )).subscribe((listaTelaApp : TelaApp[]) => {
        this.listaTelaApp = listaTelaApp;
      })
  }

 
  openDialog(aplicacao: any,tela?: any) {
    console.log('aplicacao:', aplicacao);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}'); 
      this.atualizaLista();
    });
    this.dialog.open(TelaAppEditaCriaComponent, {
      width: '800px',
      data: {
        aplicacao: this.aplicacao,
        item : tela
      }
    });
  }

  getClasse(item) {
    if (item.ativo==1) return "colunaAtivo"
    else return "colunaInativo";
  }


}
