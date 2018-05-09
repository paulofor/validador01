import { Component, OnInit } from '@angular/core';

import { Projeto } from '../shared/sdk/models';
import { ProjetoApi } from '../shared/sdk/services/custom/Projeto';

import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-canvas-projeto',
  templateUrl: './canvas-projeto.component.html',
  styleUrls: ['./canvas-projeto.component.scss']
})
export class CanvasProjetoComponent implements OnInit {

  projeto: Projeto;
  errMess: string;


  constructor(private projetoService: ProjetoApi,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      let userId = params['id'];
      console.log('Id: ' , userId);
      this.projetoService.findById(userId)
        .subscribe((valor : Projeto) => {
          console.log('Item: ' + JSON.stringify(valor));
          this.projeto = valor;
        })
    });

  }

}
