import { Component, OnInit } from '@angular/core';
import { CampanhaAds, CampanhaAdsApi, PaginaValidacaoWeb, PaginaValidacaoWebApi } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';
import { CampanhaEditaCriaComponent } from '../campanha-edita-cria/campanha-edita-cria.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lista-campanha-por-pagina',
  templateUrl: './lista-campanha-por-pagina.component.html',
  styleUrls: ['./lista-campanha-por-pagina.component.scss']
})
export class ListaCampanhaPorPaginaComponent implements OnInit {


  errMess: string;
  pagina : PaginaValidacaoWeb;
  consulta = {"include" : "campanhaAds"};

  constructor(private srv: PaginaValidacaoWebApi, private route: ActivatedRoute, 
    private dialog: MatDialog) {

  }

  carregaPaginaComCampanhas() {
    this.route.params.subscribe((params: Params) => {
      let id  = params['id'];
      console.log('IdPagina: ', id);
      this.srv.findById(id,this.consulta)
        .subscribe((valor: PaginaValidacaoWeb) => {
          console.log('Pagina com Campanha: ' + JSON.stringify(valor));
          this.pagina = valor;
        })
    });
  }


  ngOnInit() {
    this.carregaPaginaComCampanhas();
  }

  criaCampanha() {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaPaginaComCampanhas();
    });
    this.dialog.open(CampanhaEditaCriaComponent, {
      width: '800px',
      data: {
        pagina: this.pagina
      }
    });
  }



  alteraCampanha(item) {
    console.log("Item:", this.pagina);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaPaginaComCampanhas();
    });
    this.dialog.open(CampanhaEditaCriaComponent, {
      width: '800px',
      data: {
        pagina: this.pagina,
        campanha: item
      }
    });
  }


}
