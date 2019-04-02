import { Component, OnInit, Input } from '@angular/core';
import { CampanhaAds, PalavraChaveGoogle, CampanhaPalavraChaveResultado, CampanhaPalavraChaveResultadoApi, CampanhaAdsApi, PalavraGoogleProjeto, PalavraGoogleProjetoApi } from '../shared/sdk';

@Component({
  selector: 'app-edita-palavra-chave-em-campanha',
  templateUrl: './edita-palavra-chave-em-campanha.component.html',
  styleUrls: ['./edita-palavra-chave-em-campanha.component.scss']
})
export class EditaPalavraChaveEmCampanhaComponent implements OnInit {

  @Input() campanha : CampanhaAds;
  //listaPalavra: CampanhaPalavraChaveResultado[];
  listaPalavra: PalavraGoogleProjeto[];

  constructor(private srv: CampanhaPalavraChaveResultadoApi, 
              private srvConsulta : PalavraGoogleProjetoApi, private srvCampanha : CampanhaAdsApi ) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srvConsulta.ObtemPorCampanha(this.campanha.id)
    .subscribe((resultado:PalavraGoogleProjeto[]) => {
      console.log('Resultado: ' , resultado);
      this.listaPalavra = resultado;
    })
  }

  getClass() {
    return '';
  }

  /*
  carregaLista() {
    this.srvCampanha.getCampanhaPalavraChaveResultados(this.campanha.id,{'include' : 'palavraChaveGoogle'})
      .subscribe((resultado:CampanhaPalavraChaveResultado[]) => {
        console.log('Resultado: ' , resultado);
        this.listaPalavra = resultado;
      })
  }
  */

  criaListaNova() {
    this.srv.CriaRelacionamentoPorIdCampanha(this.campanha.id)
      .subscribe((resultado) => {
        this.carregaLista();
      })
  }

}
