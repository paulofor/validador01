import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ProjetoMySqlApi, ProjetoMySql } from '../shared/sdk';
import { MatDialog } from '@angular/material';
import { ReceitaEditaComponent } from '../receita-edita/receita-edita.component';

@Component({
  selector: 'app-receita-projeto',
  templateUrl: './receita-projeto.component.html',
  styleUrls: ['./receita-projeto.component.scss']
})
export class ReceitaProjetoComponent implements OnInit {

  itens : ProjetoMySql[];

  constructor(private dialog: MatDialog,private router: Router, 
              private projetoService : ProjetoMySqlApi,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.carregaDados();
  }

  edita(receita:ProjetoMySql) {
    this.dialog.open(ReceitaEditaComponent, {
      width: '600px',
      data: {
        receita: receita
      }
    });
  }

  carregaDados() {
    this.route.params.subscribe((params: Params) => {
      let userId = params['id'];
      console.log('Id: ', userId);
      this.projetoService.getProjetoCanvasMySqls(userId,{"where":{"tipo":"RECEITA"} , "include" : "receita"})
        .subscribe((valor: ProjetoMySql[]) => {
          console.log('Item: ' + JSON.stringify(valor));
          this.itens = valor;
          
        })
    });
  }
}
