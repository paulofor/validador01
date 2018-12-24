import { Component, OnInit } from '@angular/core';
import { TelaApp, TelaAppApi, ConceitoProduto, Entidade, EntidadeApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tela-app-detalhe',
  templateUrl: './tela-app-detalhe.component.html',
  styleUrls: ['./tela-app-detalhe.component.scss']
})
export class TelaAppDetalheComponent implements OnInit {

  item : TelaApp;
  listaEntidade: Entidade[];

  constructor(private servico: TelaAppApi, private srvEntidade: EntidadeApi, private router: ActivatedRoute) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.router.params.subscribe((param: Params) => {
      let id = param['id'];
      this.servico.findById(id, {'include' : 'conceitoProduto'})
        .subscribe((result: TelaApp) => {
          this.item = result;
          console.log('TelaApp + Conceito: ', JSON.stringify(result));
          this.srvEntidade.find({'where' : {'projetoMySqlId' : this.item.conceitoProduto.projetoMySqlId} })
            .subscribe((result: Entidade[])=> {
              this.listaEntidade = result;
            })
        })
    })
  }
  
  onSubmit() {
    this.servico.updateAttributes(this.item.id, this.item, (err, obj) => {
      console.log("Erro:" + err.message);
    }).subscribe((e: any) => {
      console.log(JSON.stringify(e));
      this.carregaDados();
    });
  }
}
