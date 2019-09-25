import { Component, OnInit } from '@angular/core';
import { VersaoApp, VersaoAppApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-versao-app-detalhe',
  templateUrl: './versao-app-detalhe.component.html',
  styleUrls: ['./versao-app-detalhe.component.scss']
})
export class VersaoAppDetalheComponent implements OnInit {


  versaoApp: VersaoApp;
  filtro = {};
  
  constructor(private route: ActivatedRoute, private srv: VersaoAppApi) { }


  ngOnInit() {
    this.carregaVersao();
  }

  carregaVersao() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log('ID-VersaoApp:' , id);
      this.srv.findById(id,this.filtro)
        .subscribe((resultado: VersaoApp) => {
          console.log('Resultado: ' , resultado);
          this.versaoApp = resultado;
        })
    })
  }

 

}
