import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SetupCampanha, SetupCampanhaApi } from '../shared/sdk';

@Component({
  selector: 'app-setup-detalhe',
  templateUrl: './setup-detalhe.component.html',
  styleUrls: ['./setup-detalhe.component.scss']
})
export class SetupDetalheComponent implements OnInit {

  item:SetupCampanha;


  constructor(private srv: SetupCampanhaApi, private router:ActivatedRoute) { }

  ngOnInit() {
    
    this.router.params.subscribe((params:Params) => {
      let id = params["id"];
      let filtro = {
          'include' : {'relation' : 'campanhaAds' , 'scope' : {'include' : 'projetoMySql'}}
      }
      this.srv.findById(id,filtro)
        .subscribe((result:SetupCampanha) => {
          console.log('result:' , result);
          this.item = result;
        })
    })
  }

}
