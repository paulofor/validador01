import { Component, OnInit } from '@angular/core';
import { VersaoApp, VersaoAppApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material';
import { VersaoAppEditaComponent } from '../versao-app-edita/versao-app-edita.component';

@Component({
  selector: 'app-versao-app-lista',
  templateUrl: './versao-app-lista.component.html',
  styleUrls: ['./versao-app-lista.component.scss']
})
export class VersaoAppListaComponent implements OnInit {

  lista:VersaoApp[];
  idProjeto: number;

  constructor(private route: ActivatedRoute, private srv:VersaoAppApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaAnuncios();
  }

  carregaAnuncios(){
    this.route.params.subscribe((params: Params) => {
      this.idProjeto = params['id'];
      this.srv.find({'where' : {'projetoMySqlId' : this.idProjeto }})
        .subscribe((result: VersaoApp[]) => {
          this.lista = result;
        });
    })
  }


  openDialog(item?) {
    if (!item) {
      item = new VersaoApp();
      item.projetoMySqlId = this.idProjeto;
    }
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaAnuncios();
    });
    this.dialog.open(VersaoAppEditaComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }


  permiteEdicao(item) {
    return (item.permiteEdicao == 1);
  }


}
