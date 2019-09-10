/* tslint:disable */
import {
  AnuncioAplicativo
} from '../index';

declare var Object: any;
export interface GrupoAnuncioAplicativoInterface {
  "idAds"?: string;
  "quantidadeImpressao"?: number;
  "quantidadeClique"?: number;
  "conversao"?: number;
  "custoInstalacao"?: number;
  "ctr"?: number;
  "custoConversao"?: number;
  "taxaConversao"?: number;
  "cpcMedio"?: number;
  "id"?: number;
  "anuncioAplicativoId"?: number;
  "campanhaAdsId"?: number;
  anuncioAplicativo?: AnuncioAplicativo;
}

export class GrupoAnuncioAplicativo implements GrupoAnuncioAplicativoInterface {
  "idAds": string;
  "quantidadeImpressao": number;
  "quantidadeClique": number;
  "conversao": number;
  "custoInstalacao": number;
  "ctr": number;
  "custoConversao": number;
  "taxaConversao": number;
  "cpcMedio": number;
  "id": number;
  "anuncioAplicativoId": number;
  "campanhaAdsId": number;
  anuncioAplicativo: AnuncioAplicativo;
  constructor(data?: GrupoAnuncioAplicativoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GrupoAnuncioAplicativo`.
   */
  public static getModelName() {
    return "GrupoAnuncioAplicativo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GrupoAnuncioAplicativo for dynamic purposes.
  **/
  public static factory(data: GrupoAnuncioAplicativoInterface): GrupoAnuncioAplicativo{
    return new GrupoAnuncioAplicativo(data);
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
      name: 'GrupoAnuncioAplicativo',
      plural: 'GrupoAnuncioAplicativos',
      path: 'GrupoAnuncioAplicativos',
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
        "conversao": {
          name: 'conversao',
          type: 'number'
        },
        "custoInstalacao": {
          name: 'custoInstalacao',
          type: 'number'
        },
        "ctr": {
          name: 'ctr',
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
        "cpcMedio": {
          name: 'cpcMedio',
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
