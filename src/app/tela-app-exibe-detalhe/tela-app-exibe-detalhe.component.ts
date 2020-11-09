import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLinkActive } from '@angular/router';
import { TelaApp, TelaAppApi } from '../shared/sdk';

@Component({
  selector: 'app-tela-app-exibe-detalhe',
  templateUrl: './tela-app-exibe-detalhe.component.html',
  styleUrls: ['./tela-app-exibe-detalhe.component.scss']
})
export class TelaAppExibeDetalheComponent implements OnInit {

  item: TelaApp;

  constructor(private srv:TelaAppApi, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((param:Params) => {
      let id = param['id'];
      let filtro = { 
          'include' : { 'relation' : 'versaoApps' }
      }
      this.srv.findById(id, filtro)
        .subscribe((result:TelaApp) => {
            console.log('Result' , result);
            this.item = result;
        })
    })
  }

}
