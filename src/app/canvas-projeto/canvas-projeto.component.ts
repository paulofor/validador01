import { Component, OnInit } from '@angular/core';

import { Projeto } from '../shared/sdk/models';
import { ProjetoApi } from '../shared/sdk/services/custom/Projeto';

import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjetoCanvasCriaComponent } from '../projeto-canvas-cria/projeto-canvas-cria.component'; 
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-canvas-projeto',
  templateUrl: './canvas-projeto.component.html',
  styleUrls: ['./canvas-projeto.component.scss']
})
export class CanvasProjetoComponent implements OnInit {

  projeto: Projeto;
  errMess: string;


  constructor(public dialog: MdDialog, private projetoService: ProjetoApi,
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

  chamaProjetoCanvasCria() {
    let loginRef = this.dialog.open(ProjetoCanvasCriaComponent, {width: '500px', height: '450px'});
    /*
    loginRef.afterClosed()
      .subscribe(result => {
        console.log("Login result ", result);
        this.customer = this.authService.getCachedCurrent();
        console.log("After Login ", this.customer);
        if (this.customer)        
          this.username = this.customer.username;
      });
      */
  }

}
