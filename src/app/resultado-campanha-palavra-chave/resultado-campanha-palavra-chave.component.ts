import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, CampanhaPalavraChaveResultado, CampanhaAdsApi } from '../shared/sdk';

@Component({
  selector: 'app-resultado-campanha-palavra-chave',
  templateUrl: './resultado-campanha-palavra-chave.component.html',
  styleUrls: ['./resultado-campanha-palavra-chave.component.scss']
})
export class ResultadoCampanhaPalavraChaveComponent implements OnInit {

  @Input() campanha: CampanhaAds;
  listaResultado: CampanhaPalavraChaveResultado[];
  //filtro = {'order' : 'quantidadeClique DESC' }
  filtro = { 
    "order" : "quantidadeClique DESC" , 
    "include" : 
      {   "relation" : "palavraChaveGoogle" , 
          "scope" : 
            { "include" : 
              { "relation" : "palavraChaveEstatisticas" , 
                "scope" : {"where" : {"maisRecente" : 1 } }
              }
            }
      }
  }

  constructor(private srv: CampanhaAdsApi) { }

  ngOnInit() {
    this.carregaResultados();
  }


  carregaResultados() {
    this.srv.getCampanhaPalavraChaveResultados(this.campanha.id, this.filtro)
      .subscribe((result:CampanhaPalavraChaveResultado[])=> {
        this.listaResultado = result;
        console.log('ListaResultado: ' , this.listaResultado);
      })
  }

 
}
