import { Component, OnInit } from '@angular/core';
import { TelaApp, TelaAppApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tela-app-detalhe',
  templateUrl: './tela-app-detalhe.component.html',
  styleUrls: ['./tela-app-detalhe.component.scss']
})
export class TelaAppDetalheComponent implements OnInit {

  item : TelaApp;

  constructor(private servico: TelaAppApi, private router: ActivatedRoute) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.router.params.subscribe((param: Params) => {
      let id = param['id'];
      this.servico.findById(id)
        .subscribe((result: TelaApp) => {
          this.item = result;
        })
    })
  }
  
  onSubmit() {
    
  }
}
