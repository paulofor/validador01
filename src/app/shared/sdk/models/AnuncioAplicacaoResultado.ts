/* tslint:disable */
import {
  AnuncioAplicativo
} from '../index';

declare var Object: any;
export interface AnuncioAplicacaoResultadoInterface {
  "idAds"?: string;
  "quantidadeImpressao"?: number;
  "quantidadeClique"?: number;
  "quantidadeConversao"?: number;
  "orcamentoTotalExecutado"?: number;
  "ctr"?: number;
  "cpcMedio"?: number;
  "conversao"?: number;
  "custoConversao"?: number;
  "taxaConversao"?: number;
  "quantidadeInstalacaoUsuario"?: number;
  "taxaInstalacaoUsuario"?: number;
  "id"?: number;
  "anuncioAplicativoId"?: number;
  "campanhaAdsId"?: number;
  anuncioAplicativo?: AnuncioAplicativo;
}

export class AnuncioAplicacaoResultado implements AnuncioAplicacaoResultadoInterface {
  "idAds": string;
  "quantidadeImpressao": number;
  "quantidadeClique": number;
  "quantidadeConversao": number;
  "orcamentoTotalExecutado": number;
  "ctr": number;
  "cpcMedio": number;
  "conversao": number;
  "custoConversao": number;
  "taxaConversao": number;
  "quantidadeInstalacaoUsuario": number;
  "taxaInstalacaoUsuario": number;
  "id": number;
  "anuncioAplicativoId": number;
  "campanhaAdsId": number;
  anuncioAplicativo: AnuncioAplicativo;
  constructor(data?: AnuncioAplicacaoResultadoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioAplicacaoResultado`.
   */
  public static getModelName() {
    return "AnuncioAplicacaoResultado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioAplicacaoResultado for dynamic purposes.
  **/
  public static factory(data: AnuncioAplicacaoResultadoInterface): AnuncioAplicacaoResultado{
    return new AnuncioAplicacaoResultado(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'AnuncioAplicacaoResultado',
      plural: 'AnuncioAplicacaoResultados',
      path: 'AnuncioAplicacaoResultados',
      idName: 'id',
      properties: {
        "idAds": {
          name: 'idAds',
          type: 'string'
        },
        "quantidadeImpressao": {
          name: 'quantidadeImpressao',
          type: 'number'
        },
        "quantidadeClique": {
          name: 'quantidadeClique',
          type: 'number'
        },
        "quantidadeConversao": {
          name: 'quantidadeConversao',
          type: 'number'
        },
        "orcamentoTotalExecutado": {
          name: 'orcamentoTotalExecutado',
          type: 'number'
        },
        "ctr": {
          name: 'ctr',
          type: 'number'
        },
        "cpcMedio": {
          name: 'cpcMedio',
          type: 'number'
        },
        "conversao": {
          name: 'conversao',
          type: 'number'
        },
        "custoConversao": {
          name: 'custoConversao',
          type: 'number'
        },
        "taxaConversao": {
          name: 'taxaConversao',
          type: 'number'
        },
        "quantidadeInstalacaoUsuario": {
          name: 'quantidadeInstalacaoUsuario',
          type: 'number'
        },
        "taxaInstalacaoUsuario": {
          name: 'taxaInstalacaoUsuario',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "anuncioAplicativoId": {
          name: 'anuncioAplicativoId',
          type: 'number'
        },
        "campanhaAdsId": {
          name: 'campanhaAdsId',
          type: 'number'
        },
      },
      relations: {
        anuncioAplicativo: {
          name: 'anuncioAplicativo',
          type: 'AnuncioAplicativo',
          model: 'AnuncioAplicativo',
          relationType: 'belongsTo',
                  keyFrom: 'anuncioAplicativoId',
          keyTo: 'id'
        },
      }
    }
  }
}
