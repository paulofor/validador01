import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditaVersaoRecursoComponent } from '../edita-versao-recurso/edita-versao-recurso.component';
import { RecursoProduto, RecursoProdutoApi, VersaoRecursoApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalhe-recurso-produto',
  templateUrl: './detalhe-recurso-produto.component.html',
  styleUrls: ['./detalhe-recurso-produto.component.scss']
})
export class DetalheRecursoProdutoComponent implements OnInit {

  recurso: RecursoProduto;

  constructor(private srv:RecursoProdutoApi, private dialog: MatDialog, 
            private route: ActivatedRoute, private srvVersao: VersaoRecursoApi) { 

  }

  ngOnInit() {
    this.carregaRecurso();
  }

  atualizaPrazo() {
    this.srvVersao.CalculaDataFinalizacao()
      .subscribe((result) => {
        this.carregaRecurso();
      })
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaRecurso();
    });
    this.dialog.open(EditaVersaoRecursoComponent, {
      width: '800px',
      data: {
        item: item,
        recurso : this.recurso
      }
    });
  }
  carregaRecurso() {
    let filtro = {'include' : 'versaoRecursos'};
     this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srv.findById(id, filtro)
        .subscribe((result:RecursoProduto) => {
          console.log('Result:' , JSON.stringify(result));
          this.recurso = result;
        })
    })
  }
}
