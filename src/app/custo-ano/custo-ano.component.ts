import { Component, OnInit } from '@angular/core';
import { CustoMes, CustoMesApi } from '../shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-custo-ano',
  templateUrl: './custo-ano.component.html',
  styleUrls: ['./custo-ano.component.scss']
})
export class CustoAnoComponent implements OnInit {


  listaCusto: CustoMes[];

  constructor(private route: ActivatedRoute, private servico: CustoMesApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaCustoMes();
  }


  carregaCustoMes() {
    this.route.params.subscribe((params: Params[]) => {
      let ano = params['id'];
      let filtro = {}
      this.servico.find({"where":{"and":[{"ano":ano},{"mes":{ "neq": null }},{"projetoMySqlId": null }]},"order":"mes"} )
        .subscribe((result: CustoMes[]) => {
          console.log("Result - CustoAnoComponent: ", JSON.stringify(result));
          this.listaCusto = result;
        })
    })
  }


  /*
  openDialog(item?) {
    if (!item) {
      item = new ItemValorApp();
      item.projetoMySqlId = this.projeto.id;
    }
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaProjeto();
    });
    this.dialog.open(EditaItemValorPorProjetoComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }
  */


}
