import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TelaWeb, TelaWebApi } from '../shared/sdk';

@Component({
  selector: 'app-tela-detalhe',
  templateUrl: './tela-detalhe.component.html',
  styleUrls: ['./tela-detalhe.component.scss']
})
export class TelaDetalheComponent implements OnInit {


  item : TelaWeb;

  consulta = {"include" : "telaComponenteWebs"};

  constructor(private route: ActivatedRoute, private srv: TelaWebApi) { }

  ngOnInit() {
    this.carregaObjeto();
  }

  carregaObjeto() {
    this.route.params.subscribe((params: Params) => {
      let id  = params['id'];
      console.log('IdTela: ', id);
      this.srv.findById(id,this.consulta)
        .subscribe((valor: TelaWeb) => {
          console.log('Objeto: ' + JSON.stringify(valor));
          this.item = valor;
        })
    });
  }


  

}
