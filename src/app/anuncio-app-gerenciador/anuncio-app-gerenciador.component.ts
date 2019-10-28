import { Component, OnInit } from '@angular/core';
import { AnuncioAplicativo, AnuncioAplicativoApi } from '../shared/sdk';
import { Params, ActivatedRoute } from '@angular/router';
import { EditaAnuncioAppComponent } from '../edita-anuncio-app/edita-anuncio-app.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-anuncio-app-gerenciador',
  templateUrl: './anuncio-app-gerenciador.component.html',
  styleUrls: ['./anuncio-app-gerenciador.component.scss']
})
export class AnuncioAppGerenciadorComponent implements OnInit {

  lista:AnuncioAplicativo[];
  idProjeto: number;

  constructor(private route: ActivatedRoute, private srv:AnuncioAplicativoApi, private dialog: MatDialog) { }

  ngOnInit() {
    this.carregaAnuncios();
  }

  carregaAnuncios(){
    this.route.params.subscribe((params: Params) => {
      this.idProjeto = params['id'];
      let filtro = {
          "where" : { "projetoMySqlId" : this.idProjeto } , 
          "include" : {
            "relation" : "anuncioAplicacaoResultados" , 
            "scope" : { 
              "include" : "campanhaAds" 
            } 
          } 
        }
      this.srv.find(filtro)
        .subscribe((result: AnuncioAplicativo[]) => {
          this.lista = result;
        });
    })
  }


  openDialog(anuncio?) {
    if (!anuncio) {
      anuncio = new AnuncioAplicativo();
      anuncio.projetoMySqlId = this.idProjeto;
    }
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaAnuncios();
    });
    this.dialog.open(EditaAnuncioAppComponent, {
      width: '800px',
      data: {
        item: anuncio
      }
    });
  }


  permiteEdicao(item) {
    return (item.permiteEdicao == 1);
  }

}
